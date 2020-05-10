import { Sprite } from '../../utils/sprite';
import { SeaType } from './sea-type';

export class Sea {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type, frame) {
        switch (type) {
        case SeaType.SHADOW:
            Sprite.draw(this.canvasContext, x, y, (21 + frame), 21);
            break;
        case SeaType.LIGHT:
            Sprite.draw(this.canvasContext, x, y, (21 + frame), 18);
            break;
        }

    }

}
