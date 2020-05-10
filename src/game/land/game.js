import {Tree} from "./tree";
import {TreeType} from "./tree-type";
import {TilePosition} from "../village/tile-position";
import {Grass} from "./grass";
import {GrassType} from "./grass-type";
import {CliffType} from "./cliff-type";
import {Cliff} from "./cliff";
import {MountainBottom} from "./mountain-bottom";
import {MountainTop} from "./mountain-top";
import {SeaType} from "./sea-type";
import {Sea} from "./sea";
import {House} from "../house/house";
import {WallType} from "../house/wall-type";
import {RoofType} from "../house/roof-type";
import {DoorType} from "../house/door-type";
import {Sand} from "./sand";
import {SandType} from "./sand-type";
import {Rim} from "./rim";
import {RimType} from "./rim-type";
import {RockType} from "./rock-type";
import {Rock} from "./rock";
import {Stair} from "../village/stair";
import {StairType} from "../village/stair-type";
import {Sign} from "../village/sign";
import {Dale} from "../village/dale";
import {StatueType} from "../village/statue-type";
import {Statue} from "../village/statue";
import {Post} from "../village/post";
import {Well} from "../village/well";
import {DaleType} from "../village/dale-type";
import {Telephone} from "../house/telephone";
import {getState, subscribe} from "../../state/redux";

export class Game {


    constructor(map, walls, page, character) {
        this.map = map;
        this.walls = walls;
        this.character = character;
        this.code = 'GAME';
        this.tileFrame = 0;
        this.cptFrame = 0;
        this.squareSize = {
            with: 10,
            height: 8
        }

        this.page = page;

        subscribe(() => {
            this.page = getState().page;
        })

    }

    update(canvasContext) {
        this.render(canvasContext);
    }

    render(canvasContext) {

        const canvas = document.getElementById('canvas');
        canvas.width = this.squareSize.with * 16;
        canvas.height = this.squareSize.height * 16;

        canvasContext.screenWidth = canvas.width;
        canvasContext.screenHeight = canvas.height;

        canvasContext.ctx.fillStyle = "black";
        canvasContext.ctx.fillRect(0, 0, canvasContext.screenWidth, canvasContext.screenHeight);

        this.tree = new Tree(canvasContext);
        this.grass = new Grass(canvasContext);
        this.cliff = new Cliff(canvasContext);
        this.mountainBottom = new MountainBottom(canvasContext);
        this.mountainTop = new MountainTop(canvasContext);
        this.sea = new Sea(canvasContext);
        this.house = new House(canvasContext);
        this.sand = new Sand(canvasContext);
        this.rim = new Rim(canvasContext);
        this.rock = new Rock(canvasContext);
        this.stair = new Stair(canvasContext);
        this.sign = new Sign(canvasContext);
        this.dale = new Dale(canvasContext);
        this.statue = new Statue(canvasContext);
        this.post = new Post(canvasContext);
        this.well = new Well(canvasContext);
        this.telephone = new Telephone(canvasContext);

        for (let x = (8 * (this.page.x - 1)); x < 8 * this.page.x; x++) { //documenter ce truc
            for (let y = (10 * (this.page.y - 1)); y < 10 * this.page.y; y++) { //documenter ce truc

                let x1 = x - (8 * (this.page.x - 1));
                let y1 = y - (10 * (this.page.y - 1));

                switch (this.map[x][y]) {
                    case 1:
                        this.tree.render(x1, y1, TreeType.SHADOW_BLUE, TilePosition.TOP_LEFT);
                        break;
                    case 2:
                        this.tree.render(x1, y1, TreeType.SHADOW_BLUE, TilePosition.TOP_RIGHT);
                        break;
                    case 3:
                        this.tree.render(x1, y1, TreeType.SHADOW_BLUE, TilePosition.BOTTOM_LEFT);
                        break;
                    case 4:
                        this.tree.render(x1, y1, TreeType.SHADOW_BLUE, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 5:
                        this.tree.render(x1, y1, TreeType.SHADOW_BROWN, TilePosition.TOP_LEFT);
                        break;
                    case 6:
                        this.tree.render(x1, y1, TreeType.SHADOW_BROWN, TilePosition.TOP_RIGHT);
                        break;
                    case 7:
                        this.tree.render(x1, y1, TreeType.SHADOW_BROWN, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 12:
                        this.grass.render(x1, y1, GrassType.SHADOW, TilePosition.MIDDLE_LEFT);
                        break;
                    case 13:
                        this.grass.render(x1, y1, GrassType.SHADOW, TilePosition.MIDDLE_MIDDLE);
                        break;
                    case 15:
                        this.grass.render(x1, y1, GrassType.SHADOW, TilePosition.BOTTOM_LEFT);
                        break;
                    case 18:
                        this.grass.render(x1, y1, GrassType.SHADOW, TilePosition.ANIMATED, this.tileFrame);
                        break;
                    case 24:
                        this.cliff.render(x1, y1, CliffType.SHADOW, TilePosition.TOP_RIGHT);
                        break;
                    case 27:
                        this.cliff.render(x1, y1, CliffType.SHADOW, TilePosition.MIDDLE_RIGHT);
                        break;
                    case 28:
                        this.cliff.render(x1, y1, CliffType.SHADOW, TilePosition.BOTTOM_LEFT);
                        break;
                    case 31:
                        this.grass.render(x1, y1, GrassType.SHADOW_HEIGHT);
                        break;
                    case 32:
                        this.grass.render(x1, y1, GrassType.SHADOW_SHORT);
                        break;
                    case 33:
                        this.mountainBottom.render(x1, y1, TilePosition.BOTTOM_LEFT);
                        break
                    case 34:
                        this.mountainBottom.render(x1, y1, TilePosition.BOTTOM_RIGHT);
                        break
                    case 38:
                        this.mountainTop.render(x1, y1, TilePosition.TOP_LEFT);
                        break
                    case 39:
                        this.mountainTop.render(x1, y1, TilePosition.BOTTOM_LEFT);
                        break;
                    case 40:
                        this.mountainTop.render(x1, y1, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 41:
                        this.sea.render(x1, y1, SeaType.SHADOW, this.tileFrame);
                        break;
                    case 42:
                        this.tree.render(x1, y1, TreeType.LIGHT_DRY, TilePosition.TOP_LEFT);
                        break;
                    case 43:
                        this.tree.render(x1, y1, TreeType.LIGHT_DRY, TilePosition.TOP_RIGHT);
                        break;
                    case 44:
                        this.tree.render(x1, y1, TreeType.LIGHT_DRY, TilePosition.BOTTOM_LEFT);
                        break;
                    case 45:
                        this.tree.render(x1, y1, TreeType.LIGHT_DRY, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 46:
                        this.tree.render(x1, y1, TreeType.LIGHT_HAIRY, TilePosition.TOP_LEFT);
                        break;
                    case 47:
                        this.tree.render(x1, y1, TreeType.LIGHT_HAIRY, TilePosition.TOP_RIGHT);
                        break;
                    case 48:
                        this.tree.render(x1, y1, TreeType.LIGHT_BROWN, TilePosition.TOP_LEFT);
                        break;
                    case 50:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.TOP_LEFT);
                        break;
                    case 51:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.TOP_MIDDLE);
                        break;
                    case 52:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.TOP_RIGHT);
                        break;
                    case 53:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.MIDDLE_LEFT);
                        break;
                    case 54:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.MIDDLE_MIDDLE);
                        break;
                    case 55:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.MIDDLE_RIGHT);
                        break;
                    case 56:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.BOTTOM_LEFT);
                        break;
                    case 57:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 58:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 59:
                        this.grass.render(x1, y1, GrassType.LIGHT, TilePosition.ANIMATED, this.tileFrame);
                        break;
                    case 60:
                        this.grass.render(x1, y1, GrassType.LIGHT_HEIGHT);
                        break;
                    case 61:
                        this.house.render(x1, y1, WallType.WALL_BROWN_WINDOW);
                        break;
                    case 62:
                        this.house.render(x1, y1, RoofType.ROOF_TILE_VIOLET);
                        break;
                    case 63:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.TOP_LEFT);
                        break;
                    case 64:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.TOP_MIDDLE);
                        break;
                    case 65:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.TOP_RIGHT);
                        break;
                    case 66:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.MIDDLE_LEFT);
                        break;
                    case 67:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.MIDDLE_MIDDLE);
                        break;
                    case 68:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.MIDDLE_RIGHT);
                        break;
                    case 69:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.BOTTOM_LEFT);
                        break;
                    case 70:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 71:
                        this.cliff.render(x1, y1, CliffType.LIGHT, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 72:
                        this.sea.render(x1, y1, SeaType.LIGHT, this.tileFrame);
                        break;
                    case 73:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.TOP_LEFT);
                        break;
                    case 74:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.TOP_MIDDLE);
                        break;
                    case 75:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.TOP_RIGHT);
                        break;
                    case 76:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_LEFT);
                        break;
                    case 77:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_MIDDLE);
                        break;
                    case 78:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_RIGHT);
                        break;
                    case 79:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_LEFT);
                        break;
                    case 80:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 81:
                        this.grass.render(x1, y1, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 82:
                        this.grass.render(x1, y1, GrassType.LIGHT_STRAIGHT90);
                        break;
                    case 83:
                        this.grass.render(x1, y1, GrassType.CUTABLE_DRY);
                        break;
                    case 84:
                        this.house.render(x1, y1, DoorType.DOOR_GREY);
                        break;
                    case 85:
                        this.sand.render(x1, y1, SandType.PATH);
                        break;
                    case 86:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.TOP_LEFT);
                        break;
                    case 87:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.TOP_MIDDLE);
                        break;
                    case 88:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.TOP_RIGHT);
                        break;
                    case 89:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.BOTTOM_LEFT);
                        break;
                    case 90:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 91:
                        this.house.render(x1, y1, RoofType.STRONG_BLUE, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 92:
                        this.rim.render(x1, y1, RimType.EXTREME_LEFT);
                        break;
                    case 93:
                        this.rim.render(x1, y1, RimType.LEFT);
                        break;
                    case 94:
                        this.rim.render(x1, y1, RimType.MIDDLE_DRY);
                        break;
                    case 95:
                        this.rim.render(x1, y1, RimType.RIGHT);
                        break;
                    case 96:
                        this.rim.render(x1, y1, RimType.EXTREME_RIGHT);
                        break;
                    case 97:
                        this.house.render(x1, y1, WallType.WALL_ROCK);
                        break;
                    case 98:
                        this.house.render(x1, y1, RoofType.ROCK);
                        break;
                    case 99:
                        this.house.render(x1, y1, DoorType.DOOR_WOOD);
                        break;
                    case 100:
                        this.rock.render(x1, y1, RockType.DRY);
                        break;
                    case 101:
                        this.stair.render(x1, y1, StairType.VILLAGE);
                        break;
                    case 102:
                        this.sign.render(x1, y1);
                        break;
                    case 103:
                        this.dale.render(x1, y1, DaleType.GREY);
                        break;
                    case 104:
                        this.mountainBottom.render(x1, y1, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 105:
                        this.statue.render(x1, y1, StatueType.CHICKEN, TilePosition.TOP_MIDDLE, this.tileFrame);
                        break;
                    case 106:
                        this.statue.render(x1, y1, StatueType.CHICKEN, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 107:
                        this.house.render(x1, y1, WallType.WALL_GREY_WINDOW);
                        break;
                    case 108:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.TOP_LEFT);
                        break;
                    case 109:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.TOP_MIDDLE);
                        break;
                    case 110:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.TOP_RIGHT);
                        break;
                    case 111:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.BOTTOM_LEFT);
                        break;
                    case 112:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 113:
                        this.house.render(x1, y1, RoofType.RED_SHOP, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 114:
                        this.post.render(x1, y1);
                        break;
                    case 115:
                        this.well.render(x1, y1);
                        break;
                    case 116:
                        this.grass.render(x1, y1, GrassType.LIGHT_STRAIGHT);
                        break;
                    case 117:
                        this.house.render(x1, y1, RoofType.ROOF_TILE_RED);
                        break;
                    case 118:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.TOP_LEFT);
                        break;
                    case 119:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.TOP_MIDDLE);
                        break;
                    case 120:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.TOP_RIGHT);
                        break;
                    case 121:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_LEFT);
                        break;
                    case 122:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 123:
                        this.house.render(x1, y1, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 124:
                        this.house.render(x1, y1, RoofType.ROOF_TILE_BLUE);
                        break;
                    case 125:
                        this.dale.render(x1, y1, DaleType.RED);
                        break;
                    case 126:
                        this.house.render(x1, y1, DoorType.DOOR_FOREST);
                        break;
                    case 127:
                        this.telephone.render(x1, y1);
                        break;
                    case 128:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_LEFT);
                        break;
                    case 129:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_MIDDLE);
                        break;
                    case 130:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_RIGHT);
                        break;
                    case 131:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.TOP_LEFT);
                        break;
                    case 132:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.TOP_MIDDLE);
                        break;
                    case 133:
                        this.house.render(x1, y1, RoofType.VIOLET_SHOP, TilePosition.TOP_RIGHT);
                        break;
                }
            }

            this.character.render(canvasContext);

            this.cptFrame = this.cptFrame === 400 ? 0 : this.cptFrame + 1;

            if (this.cptFrame === 30) {
                this.tileFrame = this.tileFrame === 3 ? 0 : this.tileFrame + 1;
            }
        }
    }
}
