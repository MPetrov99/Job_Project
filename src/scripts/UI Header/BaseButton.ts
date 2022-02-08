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

    public mouseoff() {
        this.alpha = 0.45;
    }

    public mouseClick() {

    }

    public idle() {

    }
}
