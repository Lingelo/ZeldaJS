import {Sprite} from "../../utils/sprite";
import {DaleType} from "./dale-type";

export class Dale {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case DaleType.GREY:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 17 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case DaleType.RED:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 21 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }
    }
}
