import { Sprite } from '../../utils/sprite';

export class Sign {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        Sprite.draw(this.canvasContext, x, y, 19, 7);
    }
}
