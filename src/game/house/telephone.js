import {Sprite} from "../../utils/sprite";

export class Telephone {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 15 - 16, 17 * 4 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
    }
}
