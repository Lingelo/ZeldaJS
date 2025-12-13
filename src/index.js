import kaboom from 'kaboom';
import { GAME_MAP, SOLID_TILES } from './data/map-data.js';

// Configuration
const TILE_SIZE = 16;
const VIEWPORT_WIDTH = 10;  // Tuiles visibles en largeur
const VIEWPORT_HEIGHT = 8;  // Tuiles visibles en hauteur
const SCALE = 4;            // Facteur d'agrandissement

// Initialisation de Kaboom
kaboom({
    width: VIEWPORT_WIDTH * TILE_SIZE * SCALE,
    height: VIEWPORT_HEIGHT * TILE_SIZE * SCALE,
    scale: SCALE,
    background: [0, 0, 0],
    crisp: true,
});

// Variables globales
let currentPage = { x: 1, y: 2 };

// Chargement des sprites depuis public/
loadSprite('map', '/map.png');
loadSprite('character', '/character.png', {
    sliceX: 8,
    sliceY: 4,
    anims: {
        'down-idle': 2,
        'down-walk': { from: 2, to: 3, loop: true },
        'left-idle': 0,
        'left-walk': { from: 0, to: 1, loop: true },
        'up-idle': 4,
        'up-walk': { from: 4, to: 5, loop: true },
        'right-idle': 6,
        'right-walk': { from: 6, to: 7, loop: true },
    }
});

// Fonction pour obtenir les coordonnées du sprite dans la tilemap
function getTileCoords(tileId) {
    const TILES_MAP = {
        // Arbres Shadow Blue
        1: { x: 0, y: 2 }, 2: { x: 1, y: 2 }, 3: { x: 0, y: 3 }, 4: { x: 1, y: 3 },
        // Arbres Shadow Brown
        5: { x: 2, y: 2 }, 6: { x: 3, y: 2 }, 7: { x: 2, y: 3 },
        // Herbe Shadow
        12: { x: 8, y: 2 }, 13: { x: 9, y: 2 }, 15: { x: 8, y: 3 }, 18: { x: 11, y: 2 },
        // Falaise Shadow
        24: { x: 5, y: 0 }, 27: { x: 5, y: 1 }, 28: { x: 4, y: 2 },
        // Herbe Shadow autres
        31: { x: 10, y: 3 }, 32: { x: 10, y: 2 },
        // Montagne
        33: { x: 3, y: 5 }, 34: { x: 4, y: 5 }, 38: { x: 3, y: 4 }, 39: { x: 3, y: 5 }, 40: { x: 4, y: 5 },
        // Mer
        41: { x: 0, y: 8 }, 72: { x: 0, y: 9 },
        // Arbres Light Dry
        42: { x: 4, y: 2 }, 43: { x: 5, y: 2 }, 44: { x: 4, y: 3 }, 45: { x: 5, y: 3 },
        // Arbres Light Hairy
        46: { x: 6, y: 2 }, 47: { x: 7, y: 2 }, 48: { x: 6, y: 3 },
        // Herbe Light
        50: { x: 8, y: 4 }, 51: { x: 9, y: 4 }, 52: { x: 10, y: 4 },
        53: { x: 8, y: 5 }, 54: { x: 9, y: 5 }, 55: { x: 10, y: 5 },
        56: { x: 8, y: 6 }, 57: { x: 9, y: 6 }, 58: { x: 10, y: 6 },
        59: { x: 11, y: 5 }, 60: { x: 11, y: 6 },
        // Maison murs
        61: { x: 1, y: 7 }, 84: { x: 0, y: 7 }, 97: { x: 2, y: 7 }, 99: { x: 3, y: 7 }, 107: { x: 4, y: 7 },
        // Toits
        62: { x: 0, y: 6 }, 117: { x: 1, y: 6 },
        // Falaises Light
        63: { x: 0, y: 4 }, 64: { x: 1, y: 4 }, 65: { x: 2, y: 4 },
        66: { x: 0, y: 5 }, 67: { x: 1, y: 5 }, 68: { x: 2, y: 5 },
        69: { x: 0, y: 6 }, 70: { x: 1, y: 6 }, 71: { x: 2, y: 6 },
        // Herbe Light Relief
        77: { x: 12, y: 5 }, 82: { x: 12, y: 6 }, 83: { x: 13, y: 5 },
        // Sable
        85: { x: 14, y: 5 },
        // Toits maisons
        86: { x: 5, y: 6 }, 87: { x: 6, y: 6 }, 88: { x: 7, y: 6 },
        89: { x: 5, y: 7 }, 90: { x: 6, y: 7 }, 91: { x: 7, y: 7 },
        // Rim
        92: { x: 8, y: 7 }, 93: { x: 9, y: 7 }, 94: { x: 10, y: 7 }, 95: { x: 11, y: 7 }, 96: { x: 12, y: 7 },
        // Maison Rock
        98: { x: 13, y: 6 }, 100: { x: 13, y: 7 },
        // Stair, Sign, Dale
        101: { x: 14, y: 6 }, 102: { x: 14, y: 7 }, 103: { x: 15, y: 5 },
        // Montagne bottom
        104: { x: 3, y: 6 },
        // Statue
        105: { x: 0, y: 10 }, 106: { x: 0, y: 11 },
        // Toits Red Shop
        108: { x: 5, y: 8 }, 109: { x: 6, y: 8 }, 110: { x: 7, y: 8 },
        111: { x: 5, y: 9 }, 112: { x: 6, y: 9 }, 113: { x: 7, y: 9 },
        // Post, Well
        114: { x: 8, y: 8 }, 115: { x: 9, y: 8 }, 116: { x: 10, y: 8 },
        // Toits Violet
        118: { x: 5, y: 10 }, 119: { x: 6, y: 10 }, 120: { x: 7, y: 10 },
        121: { x: 5, y: 11 }, 122: { x: 6, y: 11 }, 123: { x: 7, y: 11 },
        // Autres
        124: { x: 8, y: 9 }, 125: { x: 9, y: 9 }, 126: { x: 10, y: 9 }, 127: { x: 11, y: 9 },
        128: { x: 5, y: 12 }, 129: { x: 6, y: 12 }, 130: { x: 7, y: 12 },
        131: { x: 5, y: 13 }, 132: { x: 6, y: 13 }, 133: { x: 7, y: 13 },
    };
    return TILES_MAP[tileId] || { x: 9, y: 5 }; // Default: herbe
}

// Scène Titre
scene('title', () => {
    add([
        text('ZELDA JS', { size: 32 }),
        pos(width() / 2, height() / 3),
        anchor('center'),
        color(255, 255, 255),
    ]);

    add([
        text('Appuyez sur ENTREE', { size: 12 }),
        pos(width() / 2, height() / 2),
        anchor('center'),
        color(200, 200, 200),
    ]);

    onKeyPress('enter', () => {
        go('game');
    });
});

// Scène de jeu
scene('game', () => {
    const tileObjects = [];

    // Fonction pour dessiner la page courante
    function drawMap() {
        // Nettoyer les tuiles précédentes
        tileObjects.forEach(t => t.destroy());
        tileObjects.length = 0;

        const startX = currentPage.y * VIEWPORT_WIDTH;
        const startY = currentPage.x * VIEWPORT_HEIGHT;

        for (let y = 0; y < VIEWPORT_HEIGHT; y++) {
            for (let x = 0; x < VIEWPORT_WIDTH; x++) {
                const mapY = startY + y;
                const mapX = startX + x;

                if (mapY < GAME_MAP.length && mapX < GAME_MAP[0].length) {
                    const tileId = GAME_MAP[mapY][mapX];
                    const coords = getTileCoords(tileId);
                    const isSolid = SOLID_TILES.includes(tileId);

                    const tile = add([
                        sprite('map'),
                        pos(x * TILE_SIZE, y * TILE_SIZE),
                        area(),
                        // Utiliser le spritesheet avec les coordonnées
                        {
                            draw() {
                                drawSprite({
                                    sprite: 'map',
                                    pos: vec2(0, 0),
                                    quad: new Quad(
                                        (coords.x * 17 + 1) / 256,
                                        (coords.y * 17 + 1) / 256,
                                        16 / 256,
                                        16 / 256
                                    ),
                                });
                            }
                        },
                        isSolid ? 'solid' : 'ground',
                    ]);
                    tileObjects.push(tile);
                }
            }
        }
    }

    // Créer le joueur
    const player = add([
        sprite('character'),
        pos(TILE_SIZE * 4, TILE_SIZE * 4),
        area({ width: 13, height: 16 }),
        anchor('center'),
        {
            speed: 100,
            dir: 'down',
            isMoving: false,
        },
        'player',
    ]);

    player.play('down-idle');

    // Dessiner la carte initiale
    drawMap();

    // Gestion des mouvements
    const DIRS = {
        'left': vec2(-1, 0),
        'right': vec2(1, 0),
        'up': vec2(0, -1),
        'down': vec2(0, 1),
    };

    function checkCollision(newPos) {
        const startX = currentPage.y * VIEWPORT_WIDTH;
        const startY = currentPage.x * VIEWPORT_HEIGHT;

        const tileX = Math.floor((newPos.x) / TILE_SIZE);
        const tileY = Math.floor((newPos.y) / TILE_SIZE);

        if (tileX < 0 || tileX >= VIEWPORT_WIDTH || tileY < 0 || tileY >= VIEWPORT_HEIGHT) {
            return false; // Hors de la page, géré par changement de page
        }

        const mapX = startX + tileX;
        const mapY = startY + tileY;

        if (mapY < GAME_MAP.length && mapX < GAME_MAP[0].length) {
            const tileId = GAME_MAP[mapY][mapX];
            return SOLID_TILES.includes(tileId);
        }
        return true;
    }

    function movePlayer(dir) {
        const dirVec = DIRS[dir];
        const newPos = player.pos.add(dirVec.scale(player.speed * dt()));

        // Vérifier collision
        if (!checkCollision(newPos)) {
            player.pos = newPos;
        }

        // Changer l'animation si la direction change
        if (player.dir !== dir) {
            player.dir = dir;
            player.play(`${dir}-walk`);
        }
        player.isMoving = true;

        // Vérifier changement de page
        checkPageChange();
    }

    function checkPageChange() {
        let changed = false;

        if (player.pos.x < 0) {
            if (currentPage.y > 0) {
                currentPage.y--;
                player.pos.x = VIEWPORT_WIDTH * TILE_SIZE - TILE_SIZE;
                changed = true;
            } else {
                player.pos.x = 0;
            }
        } else if (player.pos.x > VIEWPORT_WIDTH * TILE_SIZE - TILE_SIZE / 2) {
            if (currentPage.y < 3) {
                currentPage.y++;
                player.pos.x = TILE_SIZE / 2;
                changed = true;
            } else {
                player.pos.x = VIEWPORT_WIDTH * TILE_SIZE - TILE_SIZE / 2;
            }
        }

        if (player.pos.y < 0) {
            if (currentPage.x > 0) {
                currentPage.x--;
                player.pos.y = VIEWPORT_HEIGHT * TILE_SIZE - TILE_SIZE;
                changed = true;
            } else {
                player.pos.y = 0;
            }
        } else if (player.pos.y > VIEWPORT_HEIGHT * TILE_SIZE - TILE_SIZE / 2) {
            if (currentPage.x < 3) {
                currentPage.x++;
                player.pos.y = TILE_SIZE / 2;
                changed = true;
            } else {
                player.pos.y = VIEWPORT_HEIGHT * TILE_SIZE - TILE_SIZE / 2;
            }
        }

        if (changed) {
            drawMap();
        }
    }

    // Input
    onUpdate(() => {
        let moved = false;

        if (isKeyDown('left')) {
            movePlayer('left');
            moved = true;
        } else if (isKeyDown('right')) {
            movePlayer('right');
            moved = true;
        } else if (isKeyDown('up')) {
            movePlayer('up');
            moved = true;
        } else if (isKeyDown('down')) {
            movePlayer('down');
            moved = true;
        }

        if (!moved && player.isMoving) {
            player.isMoving = false;
            player.play(`${player.dir}-idle`);
        }
    });

    // Retour au titre avec Escape
    onKeyPress('escape', () => {
        go('title');
    });
});

// Démarrer le jeu
go('title');
