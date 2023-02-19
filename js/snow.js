import {Constants} from "./constants.js";
export class Snow {
    constructor(wh) {
        this.wh = wh;
    }

    update() {}

    draw(ctx) {
        ctx.fillStyle = Constants.CLR_SNOW;
        for (let i = 0; i < 700; i++) {
            const x = Math.random() * this.wh[0];
            const y = Math.random() * this.wh[1];
            ctx.fillRect(x, y, 3, 3);
        }
    }
}