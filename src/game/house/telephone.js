import { Sprite } from '../../utils/sprite';

export class Telephone {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        Sprite.draw(this.canvasContext, x, y, 15, 4);
    }
}
