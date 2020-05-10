import { Sprite } from '../../utils/sprite';
import { TilePosition } from '../village/tile-position';

export class MountainBottom {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, position) {
        switch (position) {
        case TilePosition.TOP_LEFT:
            Sprite.draw(this.canvasContext, x, y, 4, 14);
            break;
        case TilePosition.BOTTOM_MIDDLE:
            Sprite.draw(this.canvasContext, x, y, 6, 13);
            break;
        case TilePosition.BOTTOM_RIGHT:
            Sprite.draw(this.canvasContext, x, y, 5, 15);
            break;
        case TilePosition.BOTTOM_LEFT:
            Sprite.draw(this.canvasContext, x, y, 4, 15);
            break;
        }

    }

}
