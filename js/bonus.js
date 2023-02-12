import {Point} from "./utils.js";

const SIZE = 5;
const DEFAULT_LIFETIME = 2;

export class Bonus {
    constructor () {
        this.scoreValue = 0;
        this.lifeTime = DEFAULT_LIFETIME;
        this.point = new Point(0, 0);
    }
    update() {
        if (this.lifeTime > 0) {
            this.lifeTime -= 1;
        }

    }
    draw(ctx) {
        if (this.lifeTime > 0) {
        ctx.fillRect(this.point.x, this.point.y, SIZE, SIZE);
        }
    }
    regenerate(difficulty, w, h) {
        this.point.x = Math.random() * w;
        this.point.y = Math.random() * h;
        this.lifeTime = DEFAULT_LIFETIME;
    }
}