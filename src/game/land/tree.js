import {Sprite} from "../../utils/sprite";
import {TreeType} from "./tree-type";
import {TilePosition} from "../village/tile-position";

export class Tree {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
            case TreeType.SHADOW_BLUE:
                switch (tilePosition) {
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 19 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 20 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 19 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 20 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16)
                        break;
                }
                break;
            case TreeType.SHADOW_BROWN:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 21 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 22 - 16, 17 * 11 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 21 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case TreeType.LIGHT_DRY:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 10 - 16, 17 * 8 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 10 - 16, 17 * 9 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case TreeType.LIGHT_HAIRY:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 7 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 10 - 16, 17 * 7 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case TreeType.LIGHT_BROWN:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 6 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 10 - 16, 17 * 6 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
        }

    }
}
