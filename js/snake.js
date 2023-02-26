import {Point} from "./utils.js";
import {Direction} from "./direction.js";

class State {
    static MOVING = 0;
    static GROWING = 1;
    static DEAD = 2;
}

const START_XY = new Point(20, 20);
const START_SIZE = 5;
const CELL_SIZE = 10;

export class Snake {
    constructor () {
        this.lastRemoved = null;
        this.direction = new Direction();
        this.state = State.GROWING;
        this.points = [START_XY];
        this.size = START_SIZE;
    }
    eat(food) {

    }
    setDirection(direction) {

    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        for (let pt of this.points) {
            ctx.fillRect(pt.x, pt.y, CELL_SIZE, CELL_SIZE);
        }

    }
    isCrashed() {

    }
    getHead() {
        return this.points[0];
    }
    getTail() {
        return this.points[this.points.length - 1];
    }
    update() {
        let np = this.direction.nextPoint(
            this.getHead());
        this.points.unshift(np);

        if (this.state == State.GROWING) {
            if (this.points.length == this.size) {
                this.state = State.MOVING;
            }
        }

        if (this.state == State.MOVING) {
            this.points.pop();
        }
    }

    setDirection(dir) {
        if (this.direction.opposite().dir == dir) {
            return;
        }
        this.direction.dir = dir;
    }
}