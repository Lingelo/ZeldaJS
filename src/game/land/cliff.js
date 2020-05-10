import {TilePosition} from "../village/tile-position";
import {Sprite} from "../../utils/sprite";
import {CliffType} from "./cliff-type";

export class Cliff {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
            case CliffType.SHADOW:
                switch (tilePosition) {
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 21 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 21 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 19 - 16, 17 * 10 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case CliffType.LIGHT:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
        }
    }

}
