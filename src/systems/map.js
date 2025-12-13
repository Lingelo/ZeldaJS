import { CONFIG } from '../config.js';
import { GAME_MAP, SOLID_TILES, INTERACTIVE_TILES } from '../data/map-data.js';
import { getTileQuad } from '../sprites.js';

// Classe pour gérer la carte
export class GameMap {
    constructor() {
        this.currentPage = { x: 0, y: 0 };
        this.tiles = [];
        this.animatedTiles = [];
        this.animFrame = 0;
        this.transitioning = false;
    }

    // Définir la page courante
    setPage(pageX, pageY) {
        this.currentPage = { x: pageX, y: pageY };
    }

    // Obtenir l'ID de tuile à une position de la carte
    getTileAt(mapX, mapY) {
        if (mapY >= 0 && mapY < GAME_MAP.length && 
            mapX >= 0 && mapX < GAME_MAP[0].length) {
            return GAME_MAP[mapY][mapX];
        }
        return null;
    }

    // Vérifier si une position est solide
    isSolid(worldX, worldY) {
        const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT } = CONFIG;
        
        // Calculer la position dans la carte globale
        const mapX = this.currentPage.y * VIEWPORT_WIDTH + Math.floor(worldX / TILE_SIZE);
        const mapY = this.currentPage.x * VIEWPORT_HEIGHT + Math.floor(worldY / TILE_SIZE);
        
        const tileId = this.getTileAt(mapX, mapY);
        return tileId !== null && SOLID_TILES.includes(tileId);
    }

    // Vérifier collision avec une hitbox
    checkCollision(x, y, width, height) {
        const { TILE_SIZE } = CONFIG;
        
        // Vérifier les 4 coins de la hitbox
        const points = [
            { x: x - width/2 + 2, y: y - height/2 + 2 },     // Top-left
            { x: x + width/2 - 2, y: y - height/2 + 2 },     // Top-right
            { x: x - width/2 + 2, y: y + height/2 - 2 },     // Bottom-left
            { x: x + width/2 - 2, y: y + height/2 - 2 },     // Bottom-right
        ];
        
        for (const point of points) {
            if (this.isSolid(point.x, point.y)) {
                return true;
            }
        }
        return false;
    }

    // Obtenir les tuiles interactives à une position
    getInteractiveAt(worldX, worldY) {
        const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT } = CONFIG;
        
        const mapX = this.currentPage.y * VIEWPORT_WIDTH + Math.floor(worldX / TILE_SIZE);
        const mapY = this.currentPage.x * VIEWPORT_HEIGHT + Math.floor(worldY / TILE_SIZE);
        
        const tileId = this.getTileAt(mapX, mapY);
        if (INTERACTIVE_TILES[tileId]) {
            return { tileId, type: INTERACTIVE_TILES[tileId] };
        }
        return null;
    }

    // Dessiner la page courante
    draw() {
        // Nettoyer les anciennes tuiles
        this.tiles.forEach(t => t.destroy());
        this.tiles = [];
        this.animatedTiles = [];

        const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, TILESET_SIZE } = CONFIG;
        const startX = this.currentPage.y * VIEWPORT_WIDTH;
        const startY = this.currentPage.x * VIEWPORT_HEIGHT;

        for (let y = 0; y < VIEWPORT_HEIGHT; y++) {
            for (let x = 0; x < VIEWPORT_WIDTH; x++) {
                const mapY = startY + y;
                const mapX = startX + x;
                const tileId = this.getTileAt(mapX, mapY);

                if (tileId !== null) {
                    const quad = getTileQuad(tileId);
                    const isAnimated = [41, 72, 59, 18].includes(tileId); // Tuiles animées
                    
                    const tile = add([
                        sprite('tileset', {
                            quad: new Quad(
                                quad.x / TILESET_SIZE,
                                quad.y / TILESET_SIZE,
                                quad.w / TILESET_SIZE,
                                quad.h / TILESET_SIZE
                            )
                        }),
                        pos(x * TILE_SIZE, y * TILE_SIZE),
                        z(0),
                        { tileId, tileX: x, tileY: y, isAnimated },
                    ]);
                    
                    this.tiles.push(tile);
                    if (isAnimated) {
                        this.animatedTiles.push({ tile, tileId, x, y });
                    }
                }
            }
        }
    }

    // Mettre à jour les animations
    update() {
        this.animFrame = (this.animFrame + dt() * 4) % 4;
        const frame = Math.floor(this.animFrame) % 2;
        
        const { TILESET_SIZE } = CONFIG;
        
        for (const { tile, tileId } of this.animatedTiles) {
            const quad = getTileQuad(tileId, frame);
            tile.quad = new Quad(
                quad.x / TILESET_SIZE,
                quad.y / TILESET_SIZE,
                quad.w / TILESET_SIZE,
                quad.h / TILESET_SIZE
            );
        }
    }

    // Vérifier si on doit changer de page
    checkPageTransition(playerX, playerY) {
        const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, PAGES_X, PAGES_Y } = CONFIG;
        const screenWidth = VIEWPORT_WIDTH * TILE_SIZE;
        const screenHeight = VIEWPORT_HEIGHT * TILE_SIZE;
        
        let newPage = null;
        let newPlayerPos = null;

        if (playerX < 0 && this.currentPage.y > 0) {
            newPage = { x: this.currentPage.x, y: this.currentPage.y - 1 };
            newPlayerPos = { x: screenWidth - TILE_SIZE, y: playerY };
        } else if (playerX > screenWidth - TILE_SIZE && this.currentPage.y < PAGES_X - 1) {
            newPage = { x: this.currentPage.x, y: this.currentPage.y + 1 };
            newPlayerPos = { x: TILE_SIZE, y: playerY };
        } else if (playerY < 0 && this.currentPage.x > 0) {
            newPage = { x: this.currentPage.x - 1, y: this.currentPage.y };
            newPlayerPos = { x: playerX, y: screenHeight - TILE_SIZE };
        } else if (playerY > screenHeight - TILE_SIZE && this.currentPage.x < PAGES_Y - 1) {
            newPage = { x: this.currentPage.x + 1, y: this.currentPage.y };
            newPlayerPos = { x: playerX, y: TILE_SIZE };
        }

        return { newPage, newPlayerPos };
    }
}
