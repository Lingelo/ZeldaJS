import { Sprite } from '../../utils/sprite';
import { RockType } from './rock-type';

export class Rock {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
        case RockType.DRY:
            Sprite.draw(this.canvasContext, x, y, 17, 9);
            break;
        }

    }
}
