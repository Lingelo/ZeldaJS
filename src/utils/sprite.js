import map90 from '../assets/images/map-90.png';
import map from '../assets/images/map.png';
import character from '../assets/images/character.png';

export class Sprite {

    static map() {
        if(this.mapImage) {
            return this.mapImage;
        }
        this.mapImage = new Image();
        this.mapImage.src = map;

        return this.mapImage;
    }

    static map90() {
        if(this.mapImage90) {
            return this.mapImage90;
        }
        this.mapImage90 = new Image();
        this.mapImage90.src = map90;

        return this.mapImage90;
    }

    static character() {
        if(this.characterImage) {
            return this.characterImage;
        }
        this.characterImage = new Image();
        this.characterImage.src = character;

        return this.characterImage;
    }

    static draw(canvasContext, x, y, spriteX, spriteY) {
        canvasContext.ctx.drawImage(this.map(), 17 * spriteX - 16, 17 * spriteY - 16, 16, 16, 16 * y, 16 * x, 16, 16);
    }

    static draw90(canvasContext, x, y, spriteX, spriteY) {
        canvasContext.ctx.drawImage(this.map90(), 17 * spriteX - 16, 17 * spriteY - 15, 16, 16, 16 * y, 16 * x, 16, 16);
    }

}
