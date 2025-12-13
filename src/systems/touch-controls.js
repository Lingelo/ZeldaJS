import { CONFIG } from '../config.js';

// État des contrôles tactiles
export const touchState = {
    up: false,
    down: false,
    left: false,
    right: false,
    action: false,
};

// Détecter si on est sur mobile
export function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) 
        || ('ontouchstart' in window);
}

// Créer les contrôles tactiles
export function createTouchControls() {
    if (!isMobile()) return null;

    const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT } = CONFIG;
    const screenWidth = VIEWPORT_WIDTH * TILE_SIZE;
    const screenHeight = VIEWPORT_HEIGHT * TILE_SIZE;

    // Conteneur des contrôles (layer UI)
    const controls = add([
        pos(0, 0),
        z(1000),
        fixed(),
        'touch-controls',
    ]);

    // Configuration du D-Pad
    const dpadSize = 24;
    const dpadX = 20;
    const dpadY = screenHeight - 50;
    const btnSpacing = dpadSize + 2;

    // Fond du D-Pad (semi-transparent)
    add([
        rect(dpadSize * 3 + 8, dpadSize * 3 + 8),
        pos(dpadX - 4, dpadY - dpadSize - 4),
        color(0, 0, 0),
        opacity(0.3),
        fixed(),
        z(999),
    ]);

    // Boutons du D-Pad
    const upBtn = createDpadButton(dpadX + dpadSize, dpadY - dpadSize, dpadSize, '▲', 'up');
    const downBtn = createDpadButton(dpadX + dpadSize, dpadY + dpadSize, dpadSize, '▼', 'down');
    const leftBtn = createDpadButton(dpadX, dpadY, dpadSize, '◀', 'left');
    const rightBtn = createDpadButton(dpadX + dpadSize * 2, dpadY, dpadSize, '▶', 'right');

    // Bouton d'action (A)
    const actionBtnX = screenWidth - 40;
    const actionBtnY = screenHeight - 35;

    add([
        circle(18),
        pos(actionBtnX, actionBtnY),
        color(0, 0, 0),
        opacity(0.3),
        fixed(),
        z(999),
    ]);

    const actionBtn = add([
        circle(16),
        pos(actionBtnX, actionBtnY),
        color(50, 150, 50),
        opacity(0.8),
        area({ shape: new Circle(vec2(0), 20) }),
        anchor('center'),
        fixed(),
        z(1000),
        'action-btn',
    ]);

    add([
        text('A', { size: 12, font: 'sink' }),
        pos(actionBtnX, actionBtnY),
        anchor('center'),
        color(255, 255, 255),
        fixed(),
        z(1001),
    ]);

    // Gestion des événements tactiles
    setupTouchEvents();

    return controls;
}

// Créer un bouton du D-Pad
function createDpadButton(x, y, size, label, direction) {
    add([
        rect(size, size),
        pos(x, y),
        color(80, 80, 80),
        opacity(0.7),
        area(),
        fixed(),
        z(1000),
        `dpad-${direction}`,
    ]);

    add([
        text(label, { size: 10, font: 'sink' }),
        pos(x + size/2, y + size/2),
        anchor('center'),
        color(255, 255, 255),
        fixed(),
        z(1001),
    ]);
}

// Configuration des événements tactiles
function setupTouchEvents() {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;

    // Empêcher le scroll et zoom sur mobile
    canvas.addEventListener('touchstart', handleTouchStart, { passive: false });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: false });
}

function handleTouchStart(e) {
    e.preventDefault();
    updateTouchState(e.touches, true);
}

function handleTouchMove(e) {
    e.preventDefault();
    updateTouchState(e.touches, true);
}

function handleTouchEnd(e) {
    e.preventDefault();
    // Reset tous les états
    touchState.up = false;
    touchState.down = false;
    touchState.left = false;
    touchState.right = false;
    touchState.action = false;
    
    // Mettre à jour avec les touches restantes
    if (e.touches.length > 0) {
        updateTouchState(e.touches, true);
    }
}

function updateTouchState(touches, pressed) {
    const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, SCALE } = CONFIG;
    const screenWidth = VIEWPORT_WIDTH * TILE_SIZE;
    const screenHeight = VIEWPORT_HEIGHT * TILE_SIZE;
    
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    
    // Reset
    touchState.up = false;
    touchState.down = false;
    touchState.left = false;
    touchState.right = false;
    touchState.action = false;

    for (let i = 0; i < touches.length; i++) {
        const touch = touches[i];
        const x = (touch.clientX - rect.left) / SCALE;
        const y = (touch.clientY - rect.top) / SCALE;

        // Zone du D-Pad (gauche de l'écran)
        if (x < screenWidth / 2) {
            const dpadCenterX = 20 + 24; // dpadX + dpadSize
            const dpadCenterY = screenHeight - 50;
            
            const dx = x - dpadCenterX;
            const dy = y - dpadCenterY;
            
            // Déterminer la direction
            if (Math.abs(dx) > Math.abs(dy)) {
                if (dx < -10) touchState.left = true;
                else if (dx > 10) touchState.right = true;
            } else {
                if (dy < -10) touchState.up = true;
                else if (dy > 10) touchState.down = true;
            }
        }
        
        // Zone du bouton A (droite de l'écran)
        const actionBtnX = screenWidth - 40;
        const actionBtnY = screenHeight - 35;
        const distToAction = Math.sqrt(Math.pow(x - actionBtnX, 2) + Math.pow(y - actionBtnY, 2));
        
        if (distToAction < 25) {
            touchState.action = true;
        }
    }
}

// Vérifier si une direction est pressée (tactile ou clavier)
export function isDirectionPressed(direction) {
    const keyMap = {
        up: ['up', 'w'],
        down: ['down', 's'],
        left: ['left', 'a'],
        right: ['right', 'd'],
    };
    
    // Vérifier le tactile
    if (touchState[direction]) return true;
    
    // Vérifier le clavier
    for (const key of keyMap[direction]) {
        if (isKeyDown(key)) return true;
    }
    
    return false;
}

// Vérifier si le bouton d'action est pressé
export function isActionPressed() {
    return touchState.action;
}
