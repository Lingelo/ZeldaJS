import {Sprite} from "../../utils/sprite";

export class Post {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 11 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
    }
}
