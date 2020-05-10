import { getState, subscribe } from '../state/redux';

export class Game {


    constructor(mapRender, map, walls, page, character) {
        this.mapRender = mapRender;
        this.map = map;
        this.walls = walls;
        this.character = character;
        this.code = 'GAME';
        this.tileFrame = 0;
        this.cptFrame = 0;
        this.squareSize = {
            with: 10,
            height: 8
        }

        this.page = page;

        subscribe(() => {
            this.page = getState().page;
        })

    }

    update(canvasContext) {
        this.render(canvasContext);
    }

    render(canvasContext) {

        const canvas = document.getElementById('canvas');
        canvas.width = this.squareSize.with * 16;
        canvas.height = this.squareSize.height * 16;

        canvasContext.screenWidth = canvas.width;
        canvasContext.screenHeight = canvas.height;

        canvasContext.ctx.fillStyle = 'black';
        canvasContext.ctx.fillRect(0, 0, canvasContext.screenWidth, canvasContext.screenHeight);

        for (let x = (8 * (this.page.x - 1)); x < 8 * this.page.x; x++) {
            for (let y = (10 * (this.page.y - 1)); y < 10 * this.page.y; y++) {

                let x1 = x - (8 * (this.page.x - 1));
                let y1 = y - (10 * (this.page.y - 1));

                this.mapRender.renderMap(this.map[x][y], x1, y1, this.tileFrame);
            }

            this.character.render(canvasContext);

            this.cptFrame = this.cptFrame === 400 ? 0 : this.cptFrame + 1;

            if (this.cptFrame === 30) {
                this.tileFrame = this.tileFrame === 3 ? 0 : this.tileFrame + 1;
            }
        }
    }
}
