import {Bonus} from "./bonus.js";
import {Snake} from "./snake.js";
import {Snow} from "./snow.js";

export class Game {
    constructor(wh) {
        this.actors = [];
        this.actors.push(new Snake());
        this.actors.push(new Bonus (wh));
        this.actors.push(new Snow(wh));
    }

    update() {
        for (let actor of this.actors) {
            actor.update();
        }
    }

    draw(ctx) {
        for (let actor of this.actors) {
            ctx.save();
            actor.draw(ctx);
            ctx.restore();
        }
    }
}