let WH = [0, 0];
let gHandle = -1;
let gTimesTamp = 0;
let gCtx = null;

function draw(ts) {
    if (ts - gTimesTamp < 200) {
        let raf = window.requestAnimationFrame(draw);
        return;
    }
    gTimesTamp = ts;

    gCtx.clearRect(0, 0, WH[0], WH[1]);
    for (let i = 0; i < 700; i++) {
        const x = Math.random() * WH[0];
        const y = Math.random() * WH[1];
        gCtx.fillRect(x, y, 3, 3);
    }
    window.requestAnimationFrame(draw);
}



function main() {
    let cnv = document.getElementById('c');
    gCtx = cnv.getContext('2d');
    gHandle = window.requestAnimationFrame(draw);
    WH = [cnv.clientWidth, cnv.height];
}

document.body.onload = main;