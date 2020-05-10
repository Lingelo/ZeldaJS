import {Sprite} from "../../utils/sprite";
import {GroundType} from "./ground-types";

export class Ground {
    constructor(canvasContext) {
        this.canvasContext = canvasContext;
    }

    render(x, y, type) {
        switch (type) {
            case GroundType.SIMPLE_GREEN:
                this.canvasContext.ctx.drawImage(Sprite.map(), 1, 18, 16, 16, 16  * y , 16  * x , 16 , 16 );
                break;
            case GroundType.SOME_GRASS_GREEN:
                this.canvasContext.ctx.drawImage(Sprite.map(), 1, 1, 16, 16, 16 * y , 16  * x , 16 , 16);
                break;
            case GroundType.FULL_GRASS_GREEN:
                this.canvasContext.ctx.drawImage(Sprite.map(), 35, 1, 16, 16, 16 * y , 16 * x , 16, 16);
                break;
        }

    }
}
