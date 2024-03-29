import { Constants } from "./constants.js";
import { Game } from "./game.js";

let WH = [0, 0];
let gHandle = -1;
let gTimesTamp = 0;
let gCtx = null;
let gLastUpdate = 0;
let gGame = null;

function draw(ts) {
    if (ts - gTimesTamp < gGame.getPeriod()) {
        if (gGame.paused) return;
        gHandle = window.requestAnimationFrame(draw);
        return;
    }
    
    gHandle = window.requestAnimationFrame(draw);
    gTimesTamp = ts;
    gCtx.fillStyle = Constants.CLR_BOARD;
    gCtx.clearRect(0, 0, WH[0], WH[1] + Constants.HUD_H);

    if (ts - gLastUpdate > Constants.UPDATE_PERIOD_MS) {
        gGame.update();

        gLastUpdate = ts;
    }

    
    gGame.draw(gCtx);

}

function setPause(val) {
    if (val) {
        window.cancelAnimationFrame(gHandle);
        gHandle = -1;
    } else {
        if (gHandle == -1) {
            gHandle = window.requestAnimationFrame(draw);
        }
    }
}

function init() {
    gGame = new Game(WH, setPause);
    gHandle = window.requestAnimationFrame(draw);
}

function main() {
    let cnv = document.getElementById('c');
    gCtx = cnv.getContext('2d');
    WH = [cnv.width, cnv.height - Constants.HUD_H];
    init();
}

document.body.onload = main;

document.body.addEventListener('keydown',
    (event) => {
        console.log('event : %s', event.code);
        if (gGame.isOver) {
            init();
        }
        gGame.onkeydown(event.code);
    }
);