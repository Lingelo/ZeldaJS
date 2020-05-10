import { TilePosition } from '../village/tile-position';
import { Sprite } from '../../utils/sprite';
import { CliffType } from './cliff-type';

export class Cliff {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
        case CliffType.SHADOW:
            switch (tilePosition) {
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 21, 8);
                break;
            case TilePosition.MIDDLE_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 21, 9);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 19, 10);
                break;
            }
            break;
        case CliffType.LIGHT:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 12);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 12);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 12);
                break;
            case TilePosition.MIDDLE_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 13);
                break;
            case TilePosition.MIDDLE_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 13);
                break;
            case TilePosition.MIDDLE_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 13);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 14);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 14);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 14);
                break;
            }
        }
    }
}
