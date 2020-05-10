import { Sprite } from '../../utils/sprite';
import { TreeType } from './tree-type';
import { TilePosition } from '../village/tile-position';

export class Tree {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
        case TreeType.SHADOW_BLUE:
            switch (tilePosition) {
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 19, 12);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 20, 12);
                break;
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 19, 11);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 20, 11);
                break;
            }
            break;
        case TreeType.SHADOW_BROWN:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 21, 11);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 22, 11);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 21, 12);
                break;
            }
            break;
        case TreeType.LIGHT_DRY:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 9, 8);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 10, 8);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 9, 9);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 10, 9);
                break;
            }
            break;
        case TreeType.LIGHT_HAIRY:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 9, 7);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 10, 7);
                break;
            }
            break;
        case TreeType.LIGHT_BROWN:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 9, 6);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 10, 6);
                break;
            }
            break;
        }

    }
}
