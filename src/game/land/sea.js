import {Sprite} from "../../utils/sprite";
import {SeaType} from "./sea-type";

export class Sea {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, frame) {
        switch (type) {
            case SeaType.SHADOW:
                this.canvasContext.ctx.drawImage(Sprite.map(), (21 + frame) * 17 - 16, 17 * 21 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case SeaType.LIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), (21 + frame) * 17 - 16, 17 * 18 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }

}
