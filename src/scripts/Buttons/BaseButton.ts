import * as PIXI from "pixi.js";
import { AddTodoButton } from "./AddTodoButton";

export class BaseButton extends PIXI.Container{
    button1: AddTodoButton | undefined;
    constructor() {
        super();
        this.addAddTodoButton();
    }
    public addAddTodoButton() {
        this.button1 = new AddTodoButton;
        this.addChild(this.button1);
    }

    public mode() {

    }

    public mouseOver() {

    }

    public mouseClick() {

    }

    public idle() {

    }
}
