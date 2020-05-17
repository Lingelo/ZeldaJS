import { Sprite } from '../../utils/sprite';
import { DIRECTION } from '../direction';
import { getState, subscribe } from '../../state/redux';

export class Character {

    constructor(x, y, direction, page) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.frame = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.speed = 5;
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
            16 * this.x + this.offsetX + 1,
            16 * this.y + this.offsetY,
            13,
            16
        );
    }

    checkChangePage() {

        if (16 * this.x + this.offsetX < - 13/2) {
            this.page = {
                x: this.page.x,
                y: this.page.y - 1
            }
            this.offsetX = this.offsetX + 10 * 16;
        } else if (16 * this.x + this.offsetX > 160 - 13/2) {
            this.page = {
                x: this.page.x,
                y: this.page.y + 1
            }
            this.offsetX = this.offsetX - 10 * 16;
        } else if (16 * this.y + this.offsetY > 120 + 16/2) {
            this.page = {
                x: this.page.x + 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY - 8 * 16 - 16/2;
        } else if (16 * this.y + this.offsetY < - 16/2) {
            this.page = {
                x: this.page.x - 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY + 135;
        }


    }

    getFrame(direction) {
        if (this.frame % this.speed === 0) {
            this.frame = 1;
            return direction.first;
        } else if (this.frame === 1) {
            this.frame = 0;
            return direction.second;
        }
    }

    move(direction) {
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

        // const nextX = Math.trunc(this.offsetX/16 - 13/2 + this.x + 8);
        // const nextY = Math.trunc(this.offsetY/16 - 16/2 + this.y + 10);
        // console.log((nextX - 1) + this.page.x * 8, (nextY- 1) + this.page.y * 10, this.map[(nextY- 1) + this.page.y * 10][(nextX - 1) + this.page.x * 8])

        return this.page;

    }
}
