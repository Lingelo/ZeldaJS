import { Sprite } from '../../utils/sprite';
import { StatueType } from './statue-type';
import { TilePosition } from './tile-position';

export class Statue {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition, frame) {


        switch (type) {
        case StatueType.CHICKEN:

            switch (tilePosition) {
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, (13 + frame), 13);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 13, 14);
                break;
            }
            break;
        }
    }
}
