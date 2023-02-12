import {Bonus} from "./bonus.js";

let gBonus = null;
let WH = [0, 0];
let gHandle = -1;
let gTimesTamp = 0;
let gCtx = null;
let UPDATE_PERIOD_MS = 2000;
let gLastUbdate = 0;

function draw(ts) {
    if (ts - gTimesTamp < 200) {
        window.requestAnimationFrame(draw);
        return;
    }

    gTimesTamp = ts;
    gCtx.clearRect(0, 0, WH[0], WH[1]);

    for (let i = 0; i < 700; i++) {
        const x = Math.random() * WH[0];
        const y = Math.random() * WH[1];
        gCtx.fillRect(x, y, 3, 3);
    }

    if (ts - gLastUbdate > UPDATE_PERIOD_MS) {
        gBonus.update();

        if (gBonus.lifeTime == 0) {
            gBonus.regenerate(0, WH[0], WH[1]);
        }

        gLastUbdate = ts;
    }

    
    gCtx.save();
    gBonus.draw(gCtx);
    gCtx.restore();
    window.requestAnimationFrame(draw);

}



function main() {
    let cnv = document.getElementById('c');
    gCtx = cnv.getContext('2d');
    gHandle = window.requestAnimationFrame(draw);
    WH = [cnv.width, cnv.height];
    gBonus = new Bonus();
    gBonus.regenerate(0, WH[0], WH[1]);
}

document.body.onload = main;