import {Sprite} from "../../utils/sprite";
import {StairType} from "./stair-type";

export class Stair {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case StairType.VILLAGE:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 13 - 16, 17 * 15 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }
}
