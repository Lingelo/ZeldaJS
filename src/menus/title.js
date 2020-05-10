import {Menu} from "./menu";

export class Title extends Menu {

    constructor() {
        super();
        this.code = 'TITLE';
    }

    render(canvasContext) {
        super.render(canvasContext);
        canvasContext.ctx.font = 60 + "px Bomberman";
        canvasContext.ctx.fillStyle = 'white';
        canvasContext.ctx.fillText("Enter", canvasContext.screenWidth / 2, 330);

    }
}
