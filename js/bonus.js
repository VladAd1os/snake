import { Point } from "./utils.js";
import { Constants } from "./constants.js";
import { Snow } from "./snow.js";

const SIZE = Constants.CELL_SIZE;
export const DEFAULT_LIFETIME = 100;


export class Bonus {
    constructor (wh) {
        this.scoreValue = 0;
        this.lifeTime = DEFAULT_LIFETIME;
        this.point = new Point(0,0);
        this.wh = wh;
        this.price = 1;
    }
    update() {
        if (this.lifeTime > 0) {
            this.lifeTime -= 1;
        } 
        if (this.lifeTime === 0) {
            this.regenerate(0);
        }

    }
    draw(ctx) {
        if (this.lifeTime > 0) {
            ctx.fillStyle = 'red';
            ctx.fillRect(this.point.x, this.point.y, SIZE, SIZE);
        }
    }
    regenerate() {
        this.point.x = Math.random() * (this.wh[0] - SIZE);
        this.point.y = Math.random() * (this.wh[1] - SIZE);
        this.point.x -= (this.point.x % SIZE);
        this.point.y -= (this.point.y % SIZE);
        this.lifeTime = DEFAULT_LIFETIME;
        //console.log(this.point.toString())
    }

    isCollision(point) {
        return (point.x == this.point.x && point.y == this.point.y);
    }

    isAlive() {
        return this.lifeTime > 0;
    }
}