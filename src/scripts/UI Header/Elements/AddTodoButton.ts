import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class AddTodoButton extends BaseButton{
    private style: TextStyles | undefined;
    private styleMedium: TextStyles["textMedium"];
    private hover: BaseButton | undefined;
    addTodoButton: PIXI.Graphics | undefined;
    addTodoButtonText: PIXI.Text | undefined;
    
    constructor() {
        super();
        this.style = new TextStyles();
        this.styleMedium = this.style.textMedium;
        this.createAddTodoButton();
        this.createAddTodoButtonText();
        this.hover = new BaseButton();
        this.on('pointerover', this.hover.mouseOver);
    }

    public createAddTodoButton() {
        this.addTodoButton = new PIXI.Graphics;
        this.addTodoButton.beginFill(0x9e9a9b);
        this.addTodoButton.lineStyle(4, 0x000000, 1);
        this.addTodoButton.drawRect(100, 70, 200, 100);
        this.addTodoButton.alpha = 0.45;
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

// function mouseOver(this: AddTodoButton) {
//     this.alpha = 1;
//     console.log("HERE!!!");
// }
