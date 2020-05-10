import {Sprite} from "../../utils/sprite";
import {RockType} from "./rock-type";

export class Rock {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case RockType.DRY:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 17 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }
}
