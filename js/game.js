import {Bonus} from "./bonus.js";
import { Direction } from "./direction.js";
import {Snake} from "./snake.js";
import {Snow} from "./snow.js";

export class Game {
    constructor(wh) {
        this.actors = [];
        this.snake = new Snake();
        this.actors.push(this.snake);
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

    onkeydown(key) {
        let dir;
        switch(key) {
            case 'ArrowUp':
                dir = Direction.N;
                break;
            case 'ArrowDown':
                dir = Direction.S;
                break;
            case 'ArrowLeft':
                dir = Direction.W;
                break;
            case 'ArrowRight':
                dir = Direction.E;
                break;
            default:
                return;
        }
        this.snake.setDirection(dir);
    }
}