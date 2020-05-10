import {TilePosition} from "../village/tile-position";
import {Sprite} from "../../utils/sprite";

export class MountainTop {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, position) {
        switch (position) {
            case TilePosition.BOTTOM_LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case TilePosition.TOP_LEFT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 12 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case TilePosition.BOTTOM_RIGHT:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 13 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
        }

    }
}
