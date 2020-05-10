import {Sprite} from "../../utils/sprite";
import {DIRECTION} from "../direction";
import {getState, subscribe} from "../../state/redux";

export class Character {

    constructor(x, y, direction, page) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.frame = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.speed = 3;

        this.page = page;

        subscribe(() => {
            this.page = getState().page;
            this.map = getState().map;
        })

    }

    render(canvasContext) {
        canvasContext.ctx.drawImage(
            Sprite.character(),
            this.getFrame(this.direction).x,
            this.getFrame(this.direction).y,
            13,
            16,
            16 * this.x + this.offsetX,
            16 * this.y + this.offsetY,
            13,
            16
        );
    }

    checkChangePage() {

        if (16 * this.x + this.offsetX < -6) {
            this.page = {
                x: this.page.x,
                y: this.page.y - 1
            }
            this.offsetX = this.offsetX + 160
            return;

        }

        if (16 * this.x + this.offsetX > 150) {
            this.page = {
                x: this.page.x,
                y: this.page.y + 1
            }
            this.offsetX = this.offsetX - 160
            return;
        }

        if (16 * this.y + this.offsetY > 120) {
            this.page = {
                x: this.page.x + 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY - 135;
            return;
        }

        if (16 * this.y + this.offsetY < -12) {
            this.page = {
                x: this.page.x - 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY + 135;
            return;

        }


    }

    getFrame(direction) {
        if (this.frame === 0) {
            this.frame = 1;
            return direction.first;
        } else if (this.frame === 1) {
            this.frame = 0;
            return direction.second;
        }
    }

    move(direction) {


        let mapPositionX = Math.trunc((this.offsetX) / 16 + this.x);
        let mapPositionY = Math.trunc((this.offsetY) / 16 + this.y);
        console.log(mapPositionX, mapPositionY)
            //, this.map[(8 * (mapPositionX - 1))][(10 * (mapPositionY - 1))])
        this.direction = direction;
        this.frame = this.frame === 1 ? 0 : 1;
        switch (direction) {
            case DIRECTION.UP:
                this.offsetY = this.offsetY - this.speed;
                this.checkChangePage();
                break;
            case DIRECTION.DOWN:
                this.offsetY = this.offsetY + this.speed;
                this.checkChangePage();
                break;
            case DIRECTION.LEFT:
                this.offsetX = this.offsetX - this.speed;
                this.checkChangePage();
                break;
            case DIRECTION.RIGHT:
                this.offsetX = this.offsetX + this.speed;
                this.checkChangePage();
                break;
        }

        return this.page;


    }
}
