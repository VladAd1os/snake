import {Point} from "./utils.js";
import {Constants} from "./constants.js";

export class Direction {
    static N = 0;
    static E = 1;
    static S = 2;
    static W = 3;

    constructor() {
        this.dir = Direction.E;
    }

    opposite() {
        return (this.dir + 2) % 4;
    }

    nextPoint(pt) {
        let dx = 0;
        let dy = 0;
        switch (this.dir) {
            case Direction.N:
                dy = -1;
                break;
            case Direction.S:
                dy = 1;
                break;
            case Direction.E:
                dx = 1;
                break;
            case Direction.W:
                dx = -1;
                break;
        }
        return new Point(
            pt.x + dx * Constants.CELL_SIZE,
            pt.y + dy * Constants.CELL_SIZE);
    }
}