'use strict'
import { Point } from "./utils.js"
import { Constants } from "./constants.js"

const FONT_H = 9;
export class Hud {
    constructor (wh, dif, score, snakeLen) {
        this.difficulity = dif;
        this.score = score;
        this.snakeLen = snakeLen;
        this.wh = wh;
        this.needUpdate = true;
        
    }

    update () {

    }

    draw (ctx) {
        if (this.needUpdate) {
            const y = this.wh[1] + FONT_H;
            ctx.strokeText(`SCORE: ${this.score}`, 10, y);
            ctx.strokeText(`LVL: ${this.difficulity}`, 80, y);
            ctx.strokeText(`LEN: ${this.snakeLen}`, 120, y);
        }
    }

    onScoreChange(val) {
        this.score = val;
    }

    onDinffucultyChange(val) {}

    onSnakeGrowth(val) {
        this.snakeLen = val;
    }
    
}