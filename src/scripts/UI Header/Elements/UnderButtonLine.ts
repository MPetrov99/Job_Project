import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";

export class UnderButtonLine extends BaseButton {
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

