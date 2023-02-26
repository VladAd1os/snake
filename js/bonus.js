import {Point} from "./utils.js";

const SIZE = 5;
export const DEFAULT_LIFETIME = 2;

export class Bonus {
    constructor (wh) {
        this.scoreValue = 0;
        this.lifeTime = DEFAULT_LIFETIME;
        this.point = new Point(0, 0);
        this.wh = wh;
    }
    update() {
        if (this.lifeTime > 0) {
            this.lifeTime -= 1;
        } 
        if (this.lifeTime === 0) {
            this.regenerate(0, this.wh[0], this.wh[1]);
        }

    }
    draw(ctx) {
        if (this.lifeTime > 0) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.point.x, this.point.y, SIZE, SIZE);
        }
    }
    regenerate(difficulty, w, h) {
        this.point.x = Math.random() * (w - SIZE);
        this.point.y = Math.random() * (h - SIZE);
        this.lifeTime = DEFAULT_LIFETIME;
    }
}