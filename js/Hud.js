'use strict'
import { Point } from "./utils.js"
import { Constants } from "./constants.js"

const FONT_H = 9;
const STATE_NORMAL = 1;
const STATE_PAUSE = 2;
const STATE_GAMEOVER = 3;
export class Hud {
    constructor (wh, dif, score, snakeLen) {
        this.difficulity = dif;
        this.score = score;
        this.snakeLen = snakeLen;
        this.wh = wh;
        this.needUpdate = true;
        this.state = STATE_NORMAL;
        
    }

    update () {

    }

    draw (ctx) {
        if (this.state == STATE_NORMAL && this.needUpdate) {
            const y = this.wh[1] + FONT_H;
            ctx.strokeText(`SCORE: ${this.score}`, 10, y);
            ctx.strokeText(`LVL: ${this.difficulity}`, 80, y);
            ctx.strokeText(`LEN: ${this.snakeLen}`, 120, y);
        } else if (this.state == STATE_GAMEOVER) {
            const y = this.wh[1] / 2;
            const x = this.wh[0] / 2 - 20;
            ctx.strokeText('GAME OVER', x , y);
            ctx.strokeText(`Your Score:${this.score}`, x, y - 20);
        }
    }

    onScoreChange(val) {
        this.score = val;
    }

    onDinffucultyChange(val) {}

    onSnakeGrowth(val) {
        this.snakeLen = val;
    }

    onGameOver() {
        this.state = STATE_GAMEOVER;
    }
    
}