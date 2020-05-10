export class Title {

    constructor() {
        this.code = 'TITLE';
    }

    render(canvasContext) {
        super.render(canvasContext);
        canvasContext.ctx.font = 60 + 'px';
        canvasContext.ctx.fillStyle = 'white';
        canvasContext.ctx.fillText('Enter', canvasContext.screenWidth / 2, 330);

    }
}
