import { Sprite } from '../../utils/sprite';

export class Well {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        Sprite.draw(this.canvasContext, x, y, 7, 3);
    }
}
