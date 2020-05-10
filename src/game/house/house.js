import { Sprite } from '../../utils/sprite';
import { WallType } from './wall-type';
import { RoofType } from './roof-type';
import { DoorType } from './door-type';
import { TilePosition } from '../village/tile-position';

export class House {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
        case DoorType.DOOR_WOOD:
            Sprite.draw(this.canvasContext, x, y, 4, 3);
            break;
        case DoorType.DOOR_FOREST:
            Sprite.draw(this.canvasContext, x, y, 15, 5);
            break;
        case RoofType.ROCK:
            Sprite.draw(this.canvasContext, x, y, 6, 3);
            break;
        case WallType.WALL_ROCK:
            Sprite.draw(this.canvasContext, x, y, 5, 3);
            break;
        case WallType.WALL_BROWN_WINDOW:
            Sprite.draw(this.canvasContext, x, y, 2, 3);
            break;
        case WallType.WALL_GREY_WINDOW:
            Sprite.draw(this.canvasContext, x, y, 1, 3);
            break;
        case RoofType.ROOF_TILE_VIOLET:
            Sprite.draw(this.canvasContext, x, y, 11, 3);
            break;
        case RoofType.ROOF_TILE_RED:
            Sprite.draw(this.canvasContext, x, y, 8, 3);
            break;
        case RoofType.ROOF_TILE_BLUE:
            Sprite.draw(this.canvasContext, x, y, 9, 3);
            break;
        case DoorType.DOOR_GREY:
            Sprite.draw(this.canvasContext, x, y, 3, 3);
            break;
        case RoofType.STRONG_BLUE:

            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 1);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 1);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 1);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 1, 2);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 2, 2);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 3, 2);
                break;
            }
            break;
        case RoofType.STRONG_VIOLET:

            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 4, 1);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 5, 1);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 6, 1);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 4, 2);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 5, 2);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 6, 2);
                break;
            }
            break;
        case RoofType.RED_SHOP:
            switch (tilePosition) {
            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 22, 1);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 23, 1);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 24, 1);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 22, 2);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 23, 2);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 24, 2);
                break;
            }
            break;
        case RoofType.VIOLET_SHOP:
            switch (tilePosition) {

            case TilePosition.TOP_LEFT:
                Sprite.draw(this.canvasContext, x, y, 7, 1);
                break;
            case TilePosition.TOP_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 8, 1);
                break;
            case TilePosition.TOP_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 9, 1);
                break;
            case TilePosition.BOTTOM_LEFT:
                Sprite.draw(this.canvasContext, x, y, 7, 2);
                break;
            case TilePosition.BOTTOM_MIDDLE:
                Sprite.draw(this.canvasContext, x, y, 8, 2);
                break;
            case TilePosition.BOTTOM_RIGHT:
                Sprite.draw(this.canvasContext, x, y, 9, 2);
                break;
            }
            break;
        }

    }
}
