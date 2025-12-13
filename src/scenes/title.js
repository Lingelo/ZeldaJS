import { CONFIG } from '../config.js';

export function titleScene() {
    const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, SCALE } = CONFIG;
    const screenWidth = VIEWPORT_WIDTH * TILE_SIZE;
    const screenHeight = VIEWPORT_HEIGHT * TILE_SIZE;

    // Fond
    add([
        rect(screenWidth, screenHeight),
        pos(0, 0),
        color(20, 40, 20),
    ]);

    // Titre
    add([
        text('ZELDA JS', { 
            size: 24,
            font: 'sink',
        }),
        pos(screenWidth / 2, screenHeight / 3),
        anchor('center'),
        color(255, 255, 255),
        z(10),
    ]);

    // Sous-titre
    add([
        text("Link's Awakening", { 
            size: 12,
            font: 'sink',
        }),
        pos(screenWidth / 2, screenHeight / 3 + 30),
        anchor('center'),
        color(200, 200, 100),
        z(10),
    ]);

    // Instruction
    const startText = add([
        text('Touchez pour commencer', {
            size: 8,
            font: 'sink',
        }),
        pos(screenWidth / 2, screenHeight * 0.7),
        anchor('center'),
        color(180, 180, 180),
        z(10),
        { alpha: 1 },
    ]);

    // Animation du texte
    let time = 0;
    onUpdate(() => {
        time += dt() * 3;
        startText.opacity = 0.5 + Math.sin(time) * 0.5;
    });

    // Contrôles
    add([
        text('Fleches: Deplacer\nEspace: Interagir\nEchap: Menu', { 
            size: 6,
            font: 'sink',
        }),
        pos(screenWidth / 2, screenHeight - 20),
        anchor('center'),
        color(100, 100, 100),
        z(10),
    ]);

    // Démarrer le jeu
    onKeyPress('enter', () => {
        go('game');
    });

    onKeyPress('space', () => {
        go('game');
    });

    // Support tactile pour mobile
    onClick(() => {
        go('game');
    });

    onTouchStart(() => {
        go('game');
    });
}
