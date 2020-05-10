import {TilePosition} from "../village/tile-position";
import {Sprite} from "../../utils/sprite";
import {GrassType} from "./grass-type";

export class Grass {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition, frame) {

        switch (type) {
            case GrassType.SHADOW:
                switch (tilePosition) {
                    case TilePosition.MIDDLE_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 19 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 20 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 19 - 16, 17 * 15 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.ANIMATED:
                        this.canvasContext.ctx.drawImage(Sprite.map(), ((17 + frame) * 17 )- 16, 17 * 17 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case GrassType.LIGHT:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 6 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 6 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 6 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 7 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 7 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 7 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break
                    case TilePosition.ANIMATED:
                        this.canvasContext.ctx.drawImage(Sprite.map(), ((17 + frame) * 17 )- 16, 17 * 16 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case GrassType.LIGHT_RELIEF:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 10 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 10 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.MIDDLE_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 10 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break
                }
                break;
            case GrassType.SHADOW_HEIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 24 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case GrassType.SHADOW_SHORT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 23 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case GrassType.LIGHT_HEIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 14 - 16, 17 * 10 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case GrassType.LIGHT_STRAIGHT90:
                this.canvasContext.ctx.drawImage(Sprite.map90(), 17 * 14 - 16, 17 * 7 - 15, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case GrassType.LIGHT_STRAIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 18 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case GrassType.CUTABLE_DRY:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 14 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }
    }
}
