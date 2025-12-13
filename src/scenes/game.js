import { CONFIG, START_PAGE, START_POS } from '../config.js';
import { GameMap } from '../systems/map.js';
import { createPlayer, handlePlayerMovement, handlePlayerInteraction } from '../entities/player.js';
import { createTouchControls, isMobile, touchState } from '../systems/touch-controls.js';

export function gameScene() {
    const { TILE_SIZE, VIEWPORT_WIDTH, VIEWPORT_HEIGHT, TRANSITION_DURATION } = CONFIG;
    const screenWidth = VIEWPORT_WIDTH * TILE_SIZE;
    const screenHeight = VIEWPORT_HEIGHT * TILE_SIZE;

    // Créer la carte
    const gameMap = new GameMap();
    gameMap.setPage(START_PAGE.x, START_PAGE.y);
    gameMap.draw();

    // Créer le joueur
    const player = createPlayer(START_POS.x, START_POS.y);

    // Créer les contrôles tactiles sur mobile
    if (isMobile()) {
        createTouchControls();
    }

    // État de transition
    let transitioning = false;

    // Boîte de dialogue
    let dialogBox = null;

    // Afficher un dialogue
    function showDialog(dialogText) {
        if (dialogBox) dialogBox.destroy();

        player.canMove = false;

        dialogBox = add([
            rect(screenWidth - 16, 40),
            pos(8, screenHeight - 48),
            color(0, 0, 0),
            outline(2, rgb(255, 255, 255)),
            z(100),
        ]);

        add([
            text(dialogText, { size: 8, font: 'sink', width: screenWidth - 32 }),
            pos(16, screenHeight - 44),
            color(255, 255, 255),
            z(101),
            'dialog-text',
        ]);

        // Fermer avec espace ou tactile
        const closeDialog = () => {
            if (dialogBox) {
                dialogBox.destroy();
                destroyAll('dialog-text');
                dialogBox = null;
                player.canMove = true;
            }
        };

        const closeHandler = onKeyPress('space', closeDialog);

        // Fermer avec tactile aussi
        let wasActionPressed = touchState.action;
        const touchHandler = onUpdate(() => {
            if (touchState.action && !wasActionPressed && dialogBox) {
                closeDialog();
                closeHandler.cancel();
                touchHandler.cancel();
            }
            wasActionPressed = touchState.action;
        });
    }

    // Transition de page fluide
    async function transitionToPage(newPage, newPlayerPos) {
        if (transitioning) return;
        transitioning = true;
        player.canMove = false;

        // Direction de la transition
        const dirX = newPage.y - gameMap.currentPage.y;
        const dirY = newPage.x - gameMap.currentPage.x;

        // Créer un conteneur pour les tuiles actuelles
        const oldTiles = gameMap.tiles.map(t => ({
            obj: t,
            startPos: t.pos.clone(),
        }));

        // Changer de page et dessiner la nouvelle
        gameMap.setPage(newPage.x, newPage.y);
        gameMap.draw();

        // Positionner les nouvelles tuiles hors écran
        const offsetX = -dirX * screenWidth;
        const offsetY = -dirY * screenHeight;
        
        gameMap.tiles.forEach(t => {
            t.pos.x += offsetX;
            t.pos.y += offsetY;
        });

        // Animer
        const duration = TRANSITION_DURATION / 1000;
        let elapsed = 0;

        const updateTransition = onUpdate(() => {
            elapsed += dt();
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);

            // Déplacer les anciennes tuiles
            oldTiles.forEach(({ obj, startPos }) => {
                obj.pos.x = startPos.x + dirX * screenWidth * eased;
                obj.pos.y = startPos.y + dirY * screenHeight * eased;
            });

            // Déplacer les nouvelles tuiles
            gameMap.tiles.forEach(t => {
                const baseX = t.tileX * TILE_SIZE;
                const baseY = t.tileY * TILE_SIZE;
                t.pos.x = baseX + offsetX * (1 - eased);
                t.pos.y = baseY + offsetY * (1 - eased);
            });

            // Déplacer le joueur
            if (dirX !== 0) {
                player.pos.x = newPlayerPos.x + offsetX * (1 - eased);
            }
            if (dirY !== 0) {
                player.pos.y = newPlayerPos.y + offsetY * (1 - eased);
            }

            if (progress >= 1) {
                // Nettoyer
                oldTiles.forEach(({ obj }) => obj.destroy());
                player.pos.x = newPlayerPos.x;
                player.pos.y = newPlayerPos.y;
                transitioning = false;
                player.canMove = true;
                updateTransition.cancel();
            }
        });
    }

    // Easing function
    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    // Gestion des interactions
    handlePlayerInteraction(player, gameMap, (interactive) => {
        switch (interactive.type) {
            case 'sign':
                showDialog('Bienvenue dans le village de Mabe !');
                break;
            case 'well':
                showDialog("C'est un puits. L'eau est fraiche.");
                break;
            case 'door':
                showDialog('La porte est fermee.');
                break;
            case 'telephone':
                showDialog('Ring ring! Personne ne repond...');
                break;
        }
    });

    // Boucle principale
    onUpdate(() => {
        if (!transitioning) {
            // Mouvement du joueur
            handlePlayerMovement(player, gameMap);

            // Vérifier transition de page
            const { newPage, newPlayerPos } = gameMap.checkPageTransition(player.pos.x, player.pos.y);
            if (newPage) {
                transitionToPage(newPage, newPlayerPos);
            }

            // Mettre à jour les animations de tuiles
            gameMap.update();
        }
    });

    // Retour au menu
    onKeyPress('escape', () => {
        go('title');
    });

    // Debug info (optionnel)
    const debugText = add([
        text('', { size: 6, font: 'sink' }),
        pos(4, 4),
        color(255, 255, 0),
        z(200),
        fixed(),
    ]);

    onUpdate(() => {
        debugText.text = `Page: ${gameMap.currentPage.x},${gameMap.currentPage.y}`;
    });
}
