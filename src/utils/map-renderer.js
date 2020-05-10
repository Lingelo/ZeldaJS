import { TreeType } from '../game/land/tree-type';
import { TilePosition } from '../game/village/tile-position';
import { Tree } from '../game/land/tree';
import { Grass } from '../game/land/grass';
import { Cliff } from '../game/land/cliff';
import { MountainBottom } from '../game/land/mountain-bottom';
import { MountainTop } from '../game/land/mountain-top';
import { Sea } from '../game/land/sea';
import { House } from '../game/house/house';
import { Sand } from '../game/land/sand';
import { Rim } from '../game/land/rim';
import { Rock } from '../game/land/rock';
import { Stair } from '../game/village/stair';
import { Sign } from '../game/village/sign';
import { Dale } from '../game/village/dale';
import { Statue } from '../game/village/statue';
import { Post } from '../game/village/post';
import { Well } from '../game/village/well';
import { Telephone } from '../game/house/telephone';
import { GrassType } from '../game/land/grass-type';
import { CliffType } from '../game/land/cliff-type';
import { SeaType } from '../game/land/sea-type';
import { WallType } from '../game/house/wall-type';
import { RoofType } from '../game/house/roof-type';
import { DoorType } from '../game/house/door-type';
import { SandType } from '../game/land/sand-type';
import { RimType } from '../game/land/rim-type';
import { RockType } from '../game/land/rock-type';
import { StairType } from '../game/village/stair-type';
import { DaleType } from '../game/village/dale-type';
import { StatueType } from '../game/village/statue-type';

export const mapRenderer = [
    [  3,  5,   6,   4,  12,  13,  13, 18,  3,  5, 47,  45,  44,  45,  44,  45,  44, 45, 42, 47, 46, 47,  46,  47,  46,  47,  46,  47,  46,  47,  46,  47,  46,  47,  46,  47, 46, 47, 46, 47],
    [ 24,  3,   4,  32,  15,  13,  31, 31,  1,  6, 45,  63,  64,  64,  65,  62,  62, 62, 44, 46, 47, 45,  44,  45,  44,  45,  44,  45,  44,  45,  44,  45,  44,  45,  44,  45, 44, 45, 44, 45],
    [ 27,  1,   2,  32,  32,  15,  18, 31,  3,  5, 43,  66,  72,  72,  68,  61,  61, 61, 42, 47, 45, 83,  50,  52,  86,  87,  87,  87,  88,  50,  52,  98,  98,  98,  50,  51, 59, 51, 51, 51],
    [ 27,  3,   4,   1,   2,  32,  15, 31,  1,  6, 45,  66,  72,  72,  39,  65,  60, 60, 44, 46, 43, 83,  56,  55,  89,  90,  90,  90,  91,  53,  55,  97,  99,  97,  53,  54, 54, 54, 54, 57],
    [ 39, 24,   1,   6,   5,   2,  32,  1,  6,  5, 43,  66,  72,  72,  72,  68,  56, 59, 42, 47, 45, 83,  83,  56,  61,  84,  61,  84,  61,  56,  59, 100,  77, 100,  53,  54, 54, 54, 55, 42],
    [ 33, 27,   3,   5,   6,   4,  32,  3,  5,  6, 45,  69,  70,  70,  70,  71,  77, 82, 44, 46, 43, 92,  65,  83,  59,  85,  85,  85,  85,  85,  85,  85, 100,  50,  59,  54, 54, 54, 55, 44],
    [ 33, 27,   1,   6,   5,   2,  32,  1,  6,  5, 43,  56,  54,  59,  58,  77,  50, 55, 42, 47, 45, 50,  68,  83,  83,  83,  83,  56,  59,  51,  52,  85,  50,  58,  63,  96, 53, 59, 55, 42],
    [ 41, 27,   3,   5,   6,   4,  32,  3,  5,  6, 46,  43,  53,  55,  77,  77,  53, 55, 44, 46, 43, 53,  39,  64,  64,  64,  64,  64,  94,  64,  64, 101,  64,  64,  40,  50, 54, 54, 55, 44],
    [ 72, 68,  42,  47,  46,  43,  77, 42, 47, 46, 47,  45,  53,  58,  77,  50,  54, 58, 42, 47, 45, 53,  33, 104, 104, 104, 104, 104, 104, 104, 104, 101, 104, 104,  34,  53, 54, 54, 55, 42],
    [ 72, 68,  44,  46,  47,  45,  77, 44, 46, 47, 45,  50,  58,  77,  50,  54,  55, 77, 44, 46, 43, 82, 103, 103, 103, 103, 103, 103, 103,  53,  55,  85,  53,  57,  57,  57, 59, 54, 58, 44],
    [ 72, 68,  42,  47,  45,  60,  83, 77, 44, 46, 43,  82,  42,  43,  56,  59,  54, 52, 77, 44, 45, 82, 103, 103,  59,  59,  59, 103, 103,  53,  55,  85,  58,  83,  83,  83, 56, 85, 85, 85],
    [ 72, 68,  44,  45,  60,  58,  77, 77, 42, 47, 45,  82,  44,  45,  77,  56,  57, 54, 52, 42, 43, 82, 103,  59, 103, 105, 103,  59, 103,  53,  55,  85,  83, 108, 109, 110,  83, 85, 50, 42],
    [ 72, 68,  42,  43,  60,  77,  77, 77, 44, 46, 43,  53,  52,  77,  77,  42,  43, 53, 55, 44, 45, 82, 103,  59, 103, 106, 103,  59, 103,  53,  55,  85,  83, 111, 112, 113,  83, 85, 55, 44],
    [ 72, 68,  44,  45,  54, 102,  77, 50, 42, 47, 45,  53,  59,  52,  77,  44,  45, 53, 58, 42, 43, 82, 103,  59, 103, 103, 103,  59, 103,  56,  56,  85,  83, 107,  99, 107,  83, 85, 55, 42],
    [ 72, 68,  42,  43,  53,  52,  85, 59, 44, 46, 43,  56,  57,  58,  77,  50,  51, 58, 42, 47, 45, 82, 103, 103,  59,  59,  59, 103, 103,  85,  85,  85,  85,  85,  85,  85,  85, 85, 55, 44],
    [ 72, 68,  44,  45,  53,  54,  85, 60, 42, 47, 46,  43,  42,  43,  50,  54,  55, 42, 47, 46, 43, 82, 103, 103, 103, 103, 103, 103, 103,  50,  50,  51,  51,  51,  51,  51,  51, 51, 55, 42],
    [ 72, 68,  42,  43,  53,  55,  85, 60, 44, 45, 44,  45,  44,  45,  60,  60,  60, 44, 45, 44, 45, 53, 116, 116, 116, 116, 116, 116, 116,  54,  60,  60,  60,  60,  60,  60,  60, 60, 60, 44],
    [ 72, 68,  44,  45,  56,  58,  85, 85, 85, 85, 85,  85, 118, 119, 120,  60,  54, 51, 51, 51, 51, 55, 114, 114, 114, 114, 114, 114, 114,  53,  60,  60,  60,  60,  60,  60,  60, 60, 60, 42],
    [ 72, 68,  92,  65,  83,  83,  83, 63, 96, 50, 52,  85, 121, 122, 123, 117,  56, 59, 54, 54, 54, 55, 114,  60,  60,  60,  60,  42,  43,  60,  60,  60,  83,  83,  83,  83,  83, 83, 60, 44],
    [ 72, 68,  52,  39,  64,  94,  64, 40, 83, 53, 55,  85, 107,  99, 107,  99, 114, 60, 54, 54, 54, 59, 114,  60, 124, 124, 124,  44,  45,  60,  60,  60,  83,  83,  83,  83,  83, 83, 60, 42],
    [ 72, 68,  55,  33, 104, 104, 104, 34, 51, 59, 55,  85,  85,  85,  85,  60,  60, 60, 60, 54, 54, 55, 114,  60,  61,  84,  61,  60, 114,  53,  60,  60,  83,  83,  83,  83,  83, 83, 60, 44],
    [ 72, 68,  53,  52, 114, 115, 114, 56, 57, 57, 57, 116,  59,  60,  60,  60,  60, 60, 54, 54, 54, 55, 114,  60,  60,  85,  60,  60, 114,  53,  60,  60,  83,  83,  83,  83,  83, 83, 60, 42],
    [ 72, 68,  53,  59, 114,  77, 114, 85, 85, 85, 85,  85,  56,  57,  57,  57,  57, 57, 59, 57, 57, 58, 114, 114, 114,  85, 114, 114, 114,  53,  60,  60,  83,  83,  83,  83,  83, 83, 60, 44],
    [ 72, 68,  53,  54,  51,  51,  52, 85, 50, 42, 43,  85,  85,  85,  85,  85,  85, 85, 85, 85, 85, 85,  85,  85,  85,  85,  50,  51,  51,  54,  60,  60,  60,  60,  60,  60,  60, 60, 60, 42],
    [ 72, 68,  59,  57,  57,  54,  55, 85, 82, 44, 45,  50,  51,  51,  51,  51,  51, 59, 51, 51, 51, 51, 116, 116, 116, 116,  57,  59,  54,  54,  60,  60,  60,  60,  60,  60,  60, 60, 60, 44],
    [ 72, 68, 117, 117, 117,  53,  55, 85, 82, 42, 43,  56,  54,  59,  54,  54,  57, 57, 54, 54, 54, 55, 103, 103, 103, 103, 103, 103, 103,  53,  54,  54,  54,  58,  83,  83,  83, 56, 63, 64],
    [ 72, 68, 107,  99, 107,  56,  58, 85, 82, 44, 45,  98,  97,  97,  97,  97,  97, 98, 53, 54, 59, 55, 103, 125, 125, 125, 125, 125, 103,  53,  54,  54,  55,  83, 131, 132, 133, 83, 66, 72],
    [ 72, 68,  52,  77,  77,  77,  85, 85, 59, 42, 43,  97,  60,  86, 115,  88,  60, 97, 54, 59, 54, 55, 103, 125,  42, 127,  43, 125, 103,  53,  54,  54,  55,  83, 128, 129, 130, 83, 66, 72],
    [ 72, 68,  54,  51,  52,  85,  85, 77, 83, 44, 45,  50,  60,  89,  90,  91,  60, 54, 54, 54, 54, 55, 103, 125,  44, 126,  45, 125, 103,  53,  54,  59,  55,  83,  61,  84,  61, 83, 66, 72],
    [ 72, 68,  53,  54,  55,  85,  50, 52, 83, 42, 43,  56,  60,  61,  84,  61,  60, 54, 54, 54, 54, 55, 103, 125, 125, 125, 125, 125, 103,  53,  54,  54,  55,  83,  77,  77,  77, 83, 66, 72],
    [ 72, 68,  56,  57,  55,  85,  53, 58, 42, 47, 46,  43,  56,  58,  77,  56,  57, 57, 59, 57, 57, 59, 103, 103, 103, 103, 103, 103, 103,  56,  57,  57,  57,  52,  83,  83,  42, 43, 66, 72],
    [ 72, 68,  42,  43,  82,  85,  82, 42, 47, 46, 47,  46,  43,  42,  43,  42,  43, 42, 43, 42, 43, 42,  43,  42,  43,  42,  43,  42,  43,  42,  43,  42,  43,  42,  43,  42,  47, 45, 69, 70],
];

export class MapRender {
    constructor(canvasContext) {
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

        this.mapAssociation = new Map();

        this.mapAssociation.set(1, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BLUE, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(2, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BLUE, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(3, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BLUE, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(4, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BLUE, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(5, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BROWN, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(6, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BROWN, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(7, (x, y) => {
            this.tree.render(x, y, TreeType.SHADOW_BROWN, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(12, (x, y) => {
            this.grass.render(x, y, GrassType.SHADOW, TilePosition.MIDDLE_LEFT);
        });
        this.mapAssociation.set(13, (x, y) => {
            this.grass.render(x, y, GrassType.SHADOW, TilePosition.MIDDLE_MIDDLE);
        });
        this.mapAssociation.set(15, (x, y) => {
            this.grass.render(x, y, GrassType.SHADOW, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(18, (x, y, tileFrame) => {
            this.grass.render(x, y, GrassType.SHADOW, TilePosition.ANIMATED, tileFrame);
        });
        this.mapAssociation.set(24, (x, y) => {
            this.cliff.render(x, y, CliffType.SHADOW, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(27, (x, y) => {
            this.cliff.render(x, y, CliffType.SHADOW, TilePosition.MIDDLE_RIGHT);
        });
        this.mapAssociation.set(28, (x, y) => {
            this.cliff.render(x, y, CliffType.SHADOW, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(31, (x, y) => {
            this.grass.render(x, y, GrassType.SHADOW_HEIGHT);
        });
        this.mapAssociation.set(32, (x, y) => {
            this.grass.render(x, y, GrassType.SHADOW_SHORT);
        });
        this.mapAssociation.set(33, (x, y) => {
            this.mountainBottom.render(x, y, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(34, (x, y) => {
            this.mountainBottom.render(x, y, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(38, (x, y) => {
            this.mountainTop.render(x, y, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(39, (x, y) => {
            this.mountainTop.render(x, y, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(40, (x, y) => {
            this.mountainTop.render(x, y, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(41, (x, y, tileFrame) => {
            this.sea.render(x, y, SeaType.SHADOW, tileFrame);
        });
        this.mapAssociation.set(42, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_DRY, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(43, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_DRY, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(44, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_DRY, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(45, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_DRY, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(46, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_HAIRY, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(47, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_HAIRY, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(48, (x, y) => {
            this.tree.render(x, y, TreeType.LIGHT_BROWN, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(50, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(51, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(52, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(53, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.MIDDLE_LEFT);
        });
        this.mapAssociation.set(54, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.MIDDLE_MIDDLE);
        });
        this.mapAssociation.set(55, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.MIDDLE_RIGHT);
        });
        this.mapAssociation.set(56, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(57, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(58, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(59, (x, y, tileFrame) => {
            this.grass.render(x, y, GrassType.LIGHT, TilePosition.ANIMATED, tileFrame);
        });
        this.mapAssociation.set(60, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_HEIGHT);
        });
        this.mapAssociation.set(61, (x, y) => {
            this.house.render(x, y, WallType.WALL_BROWN_WINDOW);
        });
        this.mapAssociation.set(62, (x, y) => {
            this.house.render(x, y, RoofType.ROOF_TILE_VIOLET);
        });
        this.mapAssociation.set(63, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(64, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(65, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(66, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.MIDDLE_LEFT);
        });
        this.mapAssociation.set(67, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.MIDDLE_MIDDLE);
        });
        this.mapAssociation.set(68, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.MIDDLE_RIGHT);
        });
        this.mapAssociation.set(69, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(70, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(71, (x, y) => {
            this.cliff.render(x, y, CliffType.LIGHT, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(72, (x, y, tileFrame) => {
            this.sea.render(x, y, SeaType.LIGHT, tileFrame);
        });
        this.mapAssociation.set(73, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(74, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(75, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(76, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_LEFT);
        });
        this.mapAssociation.set(77, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_MIDDLE);
        });
        this.mapAssociation.set(78, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.MIDDLE_RIGHT);
        });
        this.mapAssociation.set(79, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(80, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(81, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_RELIEF, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(82, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_STRAIGHT90);
        });
        this.mapAssociation.set(83, (x, y) => {
            this.grass.render(x, y, GrassType.CUTABLE_DRY);
        });
        this.mapAssociation.set(84, (x, y) => {
            this.house.render(x, y, DoorType.DOOR_GREY);
        });
        this.mapAssociation.set(85, (x, y) => {
            this.sand.render(x, y, SandType.PATH);
        });
        this.mapAssociation.set(86, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(87, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(88, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(89, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(90, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(91, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_BLUE, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(92, (x, y) => {
            this.rim.render(x, y, RimType.EXTREME_LEFT);
        });
        this.mapAssociation.set(93, (x, y) => {
            this.rim.render(x, y, RimType.LEFT);
        });
        this.mapAssociation.set(94, (x, y) => {
            this.rim.render(x, y, RimType.MIDDLE_DRY);
        });
        this.mapAssociation.set(95, (x, y) => {
            this.rim.render(x, y, RimType.RIGHT);
        });
        this.mapAssociation.set(96, (x, y) => {
            this.rim.render(x, y, RimType.EXTREME_RIGHT);
        });
        this.mapAssociation.set(97, (x, y) => {
            this.house.render(x, y, WallType.WALL_ROCK);
        });
        this.mapAssociation.set(98, (x, y) => {
            this.house.render(x, y, RoofType.ROCK);
        });
        this.mapAssociation.set(99, (x, y) => {
            this.house.render(x, y, DoorType.DOOR_WOOD);
        });
        this.mapAssociation.set(100, (x, y) => {
            this.rock.render(x, y, RockType.DRY);
        });
        this.mapAssociation.set(101, (x, y) => {
            this.stair.render(x, y, StairType.VILLAGE);
        });
        this.mapAssociation.set(102, (x, y) => {
            this.sign.render(x, y);
        });
        this.mapAssociation.set(103, (x, y) => {
            this.dale.render(x, y, DaleType.GREY);
        });
        this.mapAssociation.set(104, (x, y) => {
            this.mountainBottom.render(x, y, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(105, (x, y, tileFrame) => {
            this.statue.render(x, y, StatueType.CHICKEN, TilePosition.TOP_MIDDLE, tileFrame);
        });
        this.mapAssociation.set(106, (x, y) => {
            this.statue.render(x, y, StatueType.CHICKEN, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(107, (x, y) => {
            this.house.render(x, y, WallType.WALL_GREY_WINDOW);
        });
        this.mapAssociation.set(108, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(109, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(110, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(111, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(112, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(113, (x, y) => {
            this.house.render(x, y, RoofType.RED_SHOP, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(114, (x, y) => {
            this.post.render(x, y);
        });
        this.mapAssociation.set(115, (x, y) => {
            this.well.render(x, y);
        });
        this.mapAssociation.set(116, (x, y) => {
            this.grass.render(x, y, GrassType.LIGHT_STRAIGHT);
        });
        this.mapAssociation.set(117, (x, y) => {
            this.house.render(x, y, RoofType.ROOF_TILE_RED);
        });
        this.mapAssociation.set(118, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(119, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(120, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.TOP_RIGHT);
        });
        this.mapAssociation.set(121, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(122, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(123, (x, y) => {
            this.house.render(x, y, RoofType.STRONG_VIOLET, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(124, (x, y) => {
            this.house.render(x, y, RoofType.ROOF_TILE_BLUE);
        });
        this.mapAssociation.set(125, (x, y) => {
            this.dale.render(x, y, DaleType.RED);
        });
        this.mapAssociation.set(126, (x, y) => {
            this.house.render(x, y, DoorType.DOOR_FOREST);
        });
        this.mapAssociation.set(127, (x, y) => {
            this.telephone.render(x, y);
        });
        this.mapAssociation.set(128, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_LEFT);
        });
        this.mapAssociation.set(129, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_MIDDLE);
        });
        this.mapAssociation.set(130, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.BOTTOM_RIGHT);
        });
        this.mapAssociation.set(131, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.TOP_LEFT);
        });
        this.mapAssociation.set(132, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.TOP_MIDDLE);
        });
        this.mapAssociation.set(133, (x, y) => {
            this.house.render(x, y, RoofType.VIOLET_SHOP, TilePosition.TOP_RIGHT);
        });
        
    }

    renderMap(id, x, y, tileFrame) {
        this.mapAssociation.get(id)(x,y, tileFrame);
    }
}
