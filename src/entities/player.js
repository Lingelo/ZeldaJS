import { CONFIG } from '../config.js';

// Directions
const DIRS = {
    left: vec2(-1, 0),
    right: vec2(1, 0),
    up: vec2(0, -1),
    down: vec2(0, 1),
};

// Créer le joueur
export function createPlayer(startX, startY) {
    const { TILE_SIZE, PLAYER_SPEED } = CONFIG;
    
    const player = add([
        sprite('link'),
        pos(startX * TILE_SIZE + TILE_SIZE / 2, startY * TILE_SIZE + TILE_SIZE / 2),
        anchor('center'),
        area({ shape: new Rect(vec2(0), 12, 14), offset: vec2(0, 1) }),
        z(10),
        {
            speed: PLAYER_SPEED,
            dir: 'down',
            isMoving: false,
            canMove: true,
        },
        'player',
    ]);

    player.play('idle-down');
    
    return player;
}

// Gérer le mouvement du joueur
export function handlePlayerMovement(player, gameMap) {
    if (!player.canMove) return;
    
    let dir = null;
    let moved = false;

    // Priorité aux touches
    if (isKeyDown('left') || isKeyDown('a')) {
        dir = 'left';
    } else if (isKeyDown('right') || isKeyDown('d')) {
        dir = 'right';
    } else if (isKeyDown('up') || isKeyDown('w')) {
        dir = 'up';
    } else if (isKeyDown('down') || isKeyDown('s')) {
        dir = 'down';
    }

    if (dir) {
        const dirVec = DIRS[dir];
        const newPos = player.pos.add(dirVec.scale(player.speed * dt()));
        
        // Vérifier collision
        if (!gameMap.checkCollision(newPos.x, newPos.y, 12, 14)) {
            player.pos = newPos;
        } else {
            // Essayer de glisser le long du mur
            const slideX = vec2(newPos.x, player.pos.y);
            const slideY = vec2(player.pos.x, newPos.y);
            
            if (!gameMap.checkCollision(slideX.x, slideX.y, 12, 14)) {
                player.pos = slideX;
            } else if (!gameMap.checkCollision(slideY.x, slideY.y, 12, 14)) {
                player.pos = slideY;
            }
        }
        
        // Animation
        if (player.dir !== dir || !player.isMoving) {
            player.dir = dir;
            player.play(`walk-${dir}`);
        }
        player.isMoving = true;
        moved = true;
    }

    // Arrêter l'animation si on ne bouge plus
    if (!moved && player.isMoving) {
        player.isMoving = false;
        player.play(`idle-${player.dir}`);
    }

    return moved;
}

// Interaction avec l'environnement
export function handlePlayerInteraction(player, gameMap, onInteract) {
    onKeyPress('space', () => {
        if (!player.canMove) return;
        
        const { TILE_SIZE } = CONFIG;
        const dirOffsets = {
            up: vec2(0, -TILE_SIZE),
            down: vec2(0, TILE_SIZE),
            left: vec2(-TILE_SIZE, 0),
            right: vec2(TILE_SIZE, 0),
        };
        
        const checkPos = player.pos.add(dirOffsets[player.dir]);
        const interactive = gameMap.getInteractiveAt(checkPos.x, checkPos.y);
        
        if (interactive && onInteract) {
            onInteract(interactive);
        }
    });
}
