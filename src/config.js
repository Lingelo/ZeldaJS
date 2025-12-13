// Configuration du jeu
export const CONFIG = {
    // Taille des tuiles en pixels
    TILE_SIZE: 16,
    
    // Viewport (tuiles visibles)
    VIEWPORT_WIDTH: 10,
    VIEWPORT_HEIGHT: 8,
    
    // Facteur d'agrandissement
    SCALE: 4,
    
    // Vitesse du joueur
    PLAYER_SPEED: 120,
    
    // Taille de la carte complète (en tuiles)
    MAP_WIDTH: 40,
    MAP_HEIGHT: 32,
    
    // Nombre de pages
    PAGES_X: 4,
    PAGES_Y: 4,
    
    // Durée de la transition de page (ms)
    TRANSITION_DURATION: 300,
    
    // Taille du spritesheet de la map
    TILESET_SIZE: 256,
    TILE_SPACING: 17, // 16px + 1px de bordure
};

// Position de départ
export const START_PAGE = { x: 1, y: 2 };
export const START_POS = { x: 4, y: 4 };
