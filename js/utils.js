export class Point {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    getKey() {
        return this.y * 1000 + this.x;
    }

    toString() {
        return `${this.x}x${this.y}`
    }
}