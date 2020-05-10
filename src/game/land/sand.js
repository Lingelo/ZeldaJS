import { Sprite } from '../../utils/sprite';
import { SandType } from './sand-type';

export class Sand {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
        case SandType.PATH:
            Sprite.draw(this.canvasContext, x, y, 17, 14);
            break;
        }

    }
}
