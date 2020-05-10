import { Sprite } from '../../utils/sprite';
import { StairType } from './stair-type';

export class Stair {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
        case StairType.VILLAGE:
            Sprite.draw(this.canvasContext, x, y, 13, 15);
            break;
        }

    }
}
