import {Sprite} from "../../utils/sprite";

export class Well {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 7 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
    }
}
