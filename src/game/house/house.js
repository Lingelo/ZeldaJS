import {Sprite} from "../../utils/sprite";
import {WallType} from "./wall-type";
import {RoofType} from "./roof-type";
import {DoorType} from "./door-type";
import {TilePosition} from "../village/tile-position";

export class House {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, tilePosition) {
        switch (type) {
            case DoorType.DOOR_WOOD:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case DoorType.DOOR_FOREST:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 15 - 16, 17 * 5 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RoofType.ROCK:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case WallType.WALL_ROCK:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case WallType.WALL_BROWN_WINDOW:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case WallType.WALL_GREY_WINDOW:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RoofType.ROOF_TILE_VIOLET:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 11 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RoofType.ROOF_TILE_RED:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 8 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RoofType.ROOF_TILE_BLUE:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case DoorType.DOOR_GREY:
                this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 3 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                break;
            case RoofType.STRONG_BLUE:

                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 1 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 2 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 3 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case RoofType.STRONG_VIOLET:

                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 4 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 5 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 6 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case RoofType.RED_SHOP:
                switch (tilePosition) {
                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 22 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 23 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 24 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 22 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 23 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 24 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
            case RoofType.VIOLET_SHOP:
                switch (tilePosition) {

                    case TilePosition.TOP_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 7 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 8 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.TOP_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 1 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_LEFT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 7 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_MIDDLE:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 8 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                    case TilePosition.BOTTOM_RIGHT:
                        this.canvasContext.ctx.drawImage(Sprite.map(), 17 * 9 - 16, 17 * 2 - 16, 16, 16, 16 * y, 16 * x, 16, 16);
                        break;
                }
                break;
        }

    }
}
