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
        this.speed = 3;
        this.page = page;
        this.fromRight = false;
        this.fromDown = false;

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

        if (16 * this.x + this.offsetX < -13 / 2) {
            this.page = {
                x: this.page.x,
                y: this.page.y - 1
            }
            this.offsetX = this.offsetX + 10 * 16;
        } else if (16 * this.x + this.offsetX > 160 - 13 / 2) {
            this.page = {
                x: this.page.x,
                y: this.page.y + 1
            }
            this.offsetX = this.offsetX - 10 * 16;
        } else if (16 * this.y + this.offsetY > 120 + 16 / 2) {
            this.page = {
                x: this.page.x + 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY - 8 * 16 - 16 / 2;
        } else if (16 * this.y + this.offsetY < -16 / 2) {
            this.page = {
                x: this.page.x - 1,
                y: this.page.y
            }
            this.offsetY = this.offsetY + 135;
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

        this.direction = direction;
        this.frame = this.frame === 1 ? 0 : 1;
        const next = this.computeNextOffSet(direction);
        console.log('x',next.x, 'y',next.y)
        const tileCode = this.map[((this.page.x - 1) * 8) + next.y][((this.page.y - 1) * 10) + next.x];
        console.log(tileCode)
        console.log("fromRight", this.fromRight, "fromDown", this.fromDown)
        if (![85, 60, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 77, 82, 101, 103, 116, 125].includes(tileCode)) {
             return this.page;
        }


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

    computeNextOffSet(direction) {

        let nextOffsetX = this.offsetX;
        let nextOffsetY = this.offsetY;

        switch (direction) {
            case DIRECTION.UP:
                nextOffsetY = nextOffsetY - this.speed;
                if(this.fromDown) {
                    this.fromDown = false;
                    nextOffsetY = nextOffsetY - 16;
                }
                return {
                    x: Math.trunc((this.offsetX) / 16  + this.x),
                    y: Math.trunc((nextOffsetY + 16/2) / 16 + this.y)
                }
            case DIRECTION.LEFT:
                nextOffsetX = nextOffsetX - this.speed;
                if(this.fromRight) {
                    this.fromRight = false;
                    nextOffsetX = nextOffsetX - 13;
                }
                return {
                    x: Math.trunc((nextOffsetX) / 16  + this.x),
                    y: Math.trunc((this.offsetY + 16/2) / 16 + this.y)
                }
            case DIRECTION.DOWN:
                this.fromDown = true;
                nextOffsetY = nextOffsetY + this.speed + 16;
                return {
                    x: Math.trunc((this.offsetX) / 16  + this.x),
                    y: Math.trunc((nextOffsetY + 16/2) / 16 + this.y)
                }
            case DIRECTION.RIGHT:
                this.fromRight = true;
                nextOffsetX = nextOffsetX + this.speed + 13
                return {
                    x: Math.trunc((nextOffsetX) / 16  + this.x),
                    y: Math.trunc((this.offsetY + 16/2) / 16 + this.y)
                }
            }


    }
}
