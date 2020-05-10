import { Sprite } from '../../utils/sprite';
import { DaleType } from './dale-type';

export class Dale {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
        case DaleType.GREY:
            Sprite.draw(this.canvasContext, x, y, 17, 12);
            break;
        case DaleType.RED:
            Sprite.draw(this.canvasContext, x, y, 21, 3);
            break;
        }
    }
}
