import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class AddTodoButton extends PIXI.Container{
    private styleMedium: TextStyles | undefined;
    addTodoButton: PIXI.Graphics | undefined;
    addTodoButtonText: PIXI.Text | undefined;
    
    constructor() {
        super();
        this.createAddTodoButton();
        this.createAddTodoButtonText();
    }

    public createAddTodoButton() {
        this.addTodoButton = new PIXI.Graphics;
        this.addTodoButton.beginFill(0x9e9a9b);
        this.addTodoButton.lineStyle(4, 0x000000, 1);
        this.addTodoButton.drawRect(100, 70, 200, 100);
        this.addTodoButton.interactive = true;
        this.addTodoButton.buttonMode = true;
        this.addTodoButton.endFill();
        this.addChild(this.addTodoButton);
    }
    public createAddTodoButtonText() {
        this.addTodoButtonText = new PIXI.Text("ADD TODO", this.styleMedium);
        this.addTodoButtonText.position.set(130, 105);
        this.addChild(this.addTodoButtonText);
    }
}
