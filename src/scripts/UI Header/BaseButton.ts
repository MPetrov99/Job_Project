import * as PIXI from "pixi.js";

export class BaseButton extends PIXI.Container{
    constructor() {
        super();
    }

    public mode() {

    }

    public mouseOver() {
        this.alpha = 1;
        console.log("HERE!!!");
    }

    public mouseClick() {

    }

    public idle() {

    }
}
