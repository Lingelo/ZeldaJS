import { Sprite } from '../../utils/sprite';

export class Post {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y) {
        Sprite.draw(this.canvasContext, x, y, 11, 14);
    }
}
