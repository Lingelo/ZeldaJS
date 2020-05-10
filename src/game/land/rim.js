import { Sprite } from '../../utils/sprite';
import { RimType } from './rim-type';

export class Rim {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
        case RimType.EXTREME_LEFT:
            Sprite.draw(this.canvasContext, x, y, 6, 12);
            break;
        case RimType.LEFT:
            Sprite.draw(this.canvasContext, x, y, 7, 12);
            break;
        case RimType.MIDDLE_DRY:
            Sprite.draw(this.canvasContext, x, y, 8, 12);
            break;
        case RimType.RIGHT:
            Sprite.draw(this.canvasContext, x, y, 11, 12);
            break;
        case RimType.EXTREME_RIGHT:
            Sprite.draw(this.canvasContext, x, y, 12, 12);
            break;
        }

    }
}
