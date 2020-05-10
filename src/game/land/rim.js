import {Sprite} from "../../utils/sprite";
import {RimType} from "./rim-type";

export class Rim {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case RimType.EXTREME_LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RimType.LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 7 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RimType.MIDDLE_DRY:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 8 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RimType.RIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 11 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RimType.EXTREME_RIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 12 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }
}
