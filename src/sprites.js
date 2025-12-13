import { CONFIG } from './config.js';

// Mapping des IDs de tuiles vers les coordonnées dans le spritesheet
export const TILE_COORDS = {
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
    // Mer (animée)
    41: { x: 0, y: 8, animated: true, frames: 2 },
    72: { x: 0, y: 9, animated: true, frames: 2 },
    // Arbres Light Dry
    42: { x: 4, y: 2 }, 43: { x: 5, y: 2 }, 44: { x: 4, y: 3 }, 45: { x: 5, y: 3 },
    // Arbres Light Hairy
    46: { x: 6, y: 2 }, 47: { x: 7, y: 2 }, 48: { x: 6, y: 3 },
    // Herbe Light
    50: { x: 8, y: 4 }, 51: { x: 9, y: 4 }, 52: { x: 10, y: 4 },
    53: { x: 8, y: 5 }, 54: { x: 9, y: 5 }, 55: { x: 10, y: 5 },
    56: { x: 8, y: 6 }, 57: { x: 9, y: 6 }, 58: { x: 10, y: 6 },
    59: { x: 11, y: 5, animated: true, frames: 4 }, // Herbe animée
    60: { x: 11, y: 6 },
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
    // Toits maisons bleus
    86: { x: 5, y: 6 }, 87: { x: 6, y: 6 }, 88: { x: 7, y: 6 },
    89: { x: 5, y: 7 }, 90: { x: 6, y: 7 }, 91: { x: 7, y: 7 },
    // Rim (bord)
    92: { x: 8, y: 7 }, 93: { x: 9, y: 7 }, 94: { x: 10, y: 7 }, 95: { x: 11, y: 7 }, 96: { x: 12, y: 7 },
    // Maison Rock
    98: { x: 13, y: 6 }, 100: { x: 13, y: 7 },
    // Escalier, Panneau, Dalle
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

// Tuiles par défaut (herbe)
const DEFAULT_TILE = { x: 9, y: 5 };

// Obtenir les coordonnées d'une tuile
export function getTileCoords(tileId) {
    return TILE_COORDS[tileId] || DEFAULT_TILE;
}

// Calculer le quad pour une tuile
export function getTileQuad(tileId, frame = 0) {
    const coords = getTileCoords(tileId);
    const { TILE_SPACING, TILESET_SIZE, TILE_SIZE } = CONFIG;
    
    // Décaler X pour les tuiles animées
    const xOffset = coords.animated ? frame : 0;
    
    return {
        x: (coords.x + xOffset) * TILE_SPACING + 1,
        y: coords.y * TILE_SPACING + 1,
        w: TILE_SIZE,
        h: TILE_SIZE,
    };
}

// Charger tous les sprites
export function loadSprites() {
    // Tilemap
    loadSprite('tileset', '/map.png');
    
    // Personnage avec animations
    loadSprite('link', '/character.png', {
        sliceX: 10,
        sliceY: 8,
        anims: {
            'idle-down': { from: 0, to: 0 },
            'idle-left': { from: 10, to: 10 },
            'idle-up': { from: 20, to: 20 },
            'idle-right': { from: 30, to: 30 },
            'walk-down': { from: 0, to: 1, loop: true, speed: 8 },
            'walk-left': { from: 10, to: 11, loop: true, speed: 8 },
            'walk-up': { from: 20, to: 21, loop: true, speed: 8 },
            'walk-right': { from: 30, to: 31, loop: true, speed: 8 },
        }
    });
}
