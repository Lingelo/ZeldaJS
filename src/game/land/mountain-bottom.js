import {Sprite} from "../../utils/sprite";
import {TilePosition} from "../village/tile-position";

export class MountainBottom {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, position) {
        switch (position) {
            case TilePosition.TOP_LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 14 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case TilePosition.BOTTOM_RIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 15 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case TilePosition.BOTTOM_LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 15 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }

}
