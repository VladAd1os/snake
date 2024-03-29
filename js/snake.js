import {Point} from "./utils.js";
import {Direction} from "./direction.js";
import { Constants } from "./constants.js";

class State {
    static MOVING = 0;
    static GROWING = 1;
    static DEAD = 2;
}

const START_XY = new Point(20, 20);
const START_SIZE = 5;


export class Snake {
    constructor (onCrashCb, wh) {
        this.lastRemoved = null;
        this.direction = new Direction();
        this.state = State.GROWING;
        this.pointSet = new Set ([START_XY.getKey()]);
        this.points = [START_XY];
        this.size = START_SIZE;
        this.onCrashCb = onCrashCb;
        this.wh = wh;
    }
    eat(food) {
        this.state = State.GROWING;
        this.size += 1;
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        for (let pt of this.points) {
            ctx.fillRect(pt.x, pt.y, Constants.CELL_SIZE, Constants.CELL_SIZE);
        }

    }
    isCrashed(np) {
        return this.pointSet.has(np.getKey());
    }
    getHead() {
        return this.points[0];
    }
    getTail() {
        return this.points[this.points.length - 1];
    }
    update() {
        let np = this.direction.nextPoint(this.getHead());
        np.x = np.x % this.wh[0];
        np.y = np.y % this.wh[1];

        if (np.x < 0) np.x = this.wh[0] - Constants.CELL_SIZE;
        if (np.y < 0) np.y = this.wh[1] - Constants.CELL_SIZE;

        if (this.isCrashed(np)) {
            console.log('Snake DIED');
            this.onCrashCb();
        }   else {
            this.pointSet.add(np.getKey());
        }
        this.points.unshift(np);

        if (this.state == State.GROWING) {
            if (this.points.length == this.size) {
                this.state = State.MOVING;
            }
        }

        if (this.state == State.MOVING) {
            let removedPoint = this.points.pop();
            this.pointSet.delete(removedPoint.getKey());
        }
    }

    /**
     * 
     * @param {Direction} dir 
     * @returns 
     */
    setDirection(dir) {
        if (this.direction.opposite().dir == dir) {
            return;
        }
        this.direction.dir = dir;
    }
}