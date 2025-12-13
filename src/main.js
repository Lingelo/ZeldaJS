import kaplay from 'kaplay';
import { CONFIG } from './config.js';
import { loadSprites } from './sprites.js';
import { titleScene } from './scenes/title.js';
import { gameScene } from './scenes/game.js';

const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, SCALE } = CONFIG;

// Initialisation de KAPLAY
kaplay({
    width: VIEWPORT_WIDTH * TILE_SIZE,
    height: VIEWPORT_HEIGHT * TILE_SIZE,
    scale: SCALE,
    background: [20, 40, 20],
    crisp: true,
    pixelDensity: 1,
    canvas: document.querySelector('canvas') || undefined,
});

// Charger les sprites
loadSprites();

// Définir les scènes
scene('title', titleScene);
scene('game', gameScene);

// Démarrer avec l'écran titre
go('title');
