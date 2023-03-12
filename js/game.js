import { Bonus } from "./bonus.js";
import { Direction } from "./direction.js";
import { Snake } from "./snake.js";
import { Snow } from "./snow.js";
import { Constants } from "./constants.js";
import { Hud } from "./Hud.js";

export class Game {
    constructor(wh, setPausedCb) {
        this.paused = false;
        this.difficulty = 0;
        this.score = 0;
        this.setPause = setPausedCb;
        this.bonus = new Bonus (wh);
        this.actors = [];
        this.snake = new Snake(this.onSnakeCrashed);
        //this.actors.push(new Bonus (wh));
        this.actors.push(new Snow(wh));
        this.hud = new Hud(wh, this.difficulty, this.score, this.snake.size);
        this.actors.push(this.snake);
        this.actors.push(this.bonus);
        this.actors.push(this.hud);
    }

    update() {
        for (let actor of this.actors) {
            actor.update();
        }

        if (this.bonus.isAlive() && this.bonus.isCollision(this.snake.getHead())) {
            this.snake.eat(this.bonus);
            this.score += this.bonus.price;
            this.bonus.regenerate(this.difficulty);
            this.hud.onSnakeGrowth(this.snake.size);
            this.hud.onScoreChange(this.score);
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
            case 'Space':
                this.paused = !this.paused;
                this.setPause(this.paused);
                break;
            default:
                return;
        }
        this.snake.setDirection(dir);
    }

    onSnakeCrashed () {
        console.log('onSnakeCrashed');
    }
}