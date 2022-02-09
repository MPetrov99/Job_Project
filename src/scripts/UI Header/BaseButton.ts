import * as PIXI from "pixi.js";

export class BaseButton extends PIXI.Container{
    constructor() {
        super();
    }

    public mode() {

    }

    public mouseOver() {
        this.alpha = 1;
    }

    public mouseOff() {
        this.alpha = 0.45;
    }

    public mouseClick() {
        console.log("CLICKED !!!");
    }

    public idle() {

    }
}
