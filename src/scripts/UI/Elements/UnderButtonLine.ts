import * as PIXI from "pixi.js";

export class UnderButtonLine extends PIXI.Container {
    line: PIXI.Graphics | undefined;

    constructor() {
        super();
        this.createLine();
    }

    public createLine() { 
        this.line = new PIXI.Graphics;
        this.line.lineStyle(5, 0x000000, 1).moveTo(0, 200).lineTo(2500, 200);
        this.addChild(this.line);
    }
}

