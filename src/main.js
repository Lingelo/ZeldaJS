import kaplay from 'kaplay';
import { CONFIG } from './config.js';
import { loadSprites } from './sprites.js';
import { titleScene } from './scenes/title.js';
import { gameScene } from './scenes/game.js';

const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, SCALE } = CONFIG;

// Calculer la taille optimale sans stretch
const gameWidth = VIEWPORT_WIDTH * TILE_SIZE;
const gameHeight = VIEWPORT_HEIGHT * TILE_SIZE;

// Initialisation de KAPLAY
kaplay({
    width: gameWidth,
    height: gameHeight,
    scale: SCALE,
    stretch: false,        // Pas de stretch !
    letterbox: true,       // Bandes noires pour garder l'aspect ratio
    background: [0, 0, 0], // Fond noir pour les bandes
    crisp: true,
    pixelDensity: 1,
});

// Charger les sprites
loadSprites();

// Définir les scènes
scene('title', titleScene);
scene('game', gameScene);

// Démarrer avec l'écran titre
go('title');
