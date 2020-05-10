import {Sprite} from "../../utils/sprite";
import {SandType} from "./sand-type";

export class Sand {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case SandType.PATH:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 17 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }
}
