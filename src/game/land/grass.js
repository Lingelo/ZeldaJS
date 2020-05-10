import { TilePosition } from '../village/tile-position';
import { Sprite } from '../../utils/sprite';
import { GrassType } from './grass-type';

export class Grass {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition, frame) {

        switch (type) {
        case GrassType.SHADOW:
            switch (tilePosition) {
            case TilePosition.MIDDLE_LEFT:
                Sprite.draw(this.canvasContext, x, y, 19, 14);
                break;
            case TilePosition.MIDDLE_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 20, 14);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 19, 15);
                break;
            case TilePosition.ANIMATED:
                Sprite.draw(this.canvasContext, x, y, (17 + frame), 17);
                break;
            }
            break;
        case GrassType.LIGHT:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 6);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 6);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 6);
                break;
            case TilePosition.MIDDLE_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 7);
                break;
            case TilePosition.MIDDLE_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 7);
                break;
            case TilePosition.MIDDLE_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 7);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 8);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 8);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 8);
                break
            case TilePosition.ANIMATED:
                Sprite.draw(this.canvasContext, x, y, (17 + frame), 16);
                break;
            }
            break;
        case GrassType.LIGHT_RELIEF:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 4, 9);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 5, 9);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 6, 9);
                break;
            case TilePosition.MIDDLE_LEFT:
                Sprite.draw(this.canvasContext, x, y, 4, 10);
                break;
            case TilePosition.MIDDLE_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 5, 10);
                break;
            case TilePosition.MIDDLE_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 6, 10);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 4, 11);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 5, 11);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 6, 11);
                break
            }
            break;
        case GrassType.SHADOW_HEIGHT:
            Sprite.draw(this.canvasContext, x, y, 24, 9);
            break;
        case GrassType.SHADOW_SHORT:
            Sprite.draw(this.canvasContext, x, y, 23, 8);
            break;
        case GrassType.LIGHT_HEIGHT:
            Sprite.draw(this.canvasContext, x, y, 14, 10);
            break;
        case GrassType.LIGHT_STRAIGHT90:
            Sprite.draw90(this.canvasContext, x, y, 14, 7);
            break;
        case GrassType.LIGHT_STRAIGHT:
            Sprite.draw(this.canvasContext, x, y, 18, 14);
            break;
        case GrassType.CUTABLE_DRY:
            Sprite.draw(this.canvasContext, x, y, 14, 11);
            break;
        }
    }
}
