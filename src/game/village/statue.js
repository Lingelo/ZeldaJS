import {Sprite} from "../../utils/sprite";
import {StatueType} from "./statue-type";
import {TilePosition} from "./tile-position";

export class Statue {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition, frame) {


        switch (type) {
            case StatueType.CHICKEN:

                switch (tilePosition) {
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), ((13 + frame) * 17 )- 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 13 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
        }
    }
}
