import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class AddTodoButton extends BaseButton{
    private style: TextStyles | undefined;
    private styleMedium: TextStyles["textMedium"];
    addTodoButton: PIXI.Graphics | undefined;
    addTodoButtonText: PIXI.Text | undefined;
    constructor() {
        super();
        this.style = new TextStyles();
        this.styleMedium = this.style.textMedium;
        this.createAddTodoButton();
        this.createAddTodoButtonText();
        this.interactive = true;
        this.buttonMode = true;
        this.alpha = 0.45;
        this.on('pointerover', this.mouseOver);
        this.mouseOver = this.mouseOver.bind(this);
        this.on('pointerout', this.mouseOff);
        this.mouseOff = this.mouseOff.bind(this);
        this.on('pointerdown', this.mouseClick);
        this.mouseClick = this.mouseClick.bind(this);
    }

    public createAddTodoButton() {
        this.addTodoButton = new PIXI.Graphics;
        this.addTodoButton.beginFill(0x9e9a9b);
        this.addTodoButton.lineStyle(4, 0x000000, 1);
        this.addTodoButton.drawRect(100, 70, 200, 100);
        this.addTodoButton.endFill();
        this.addChild(this.addTodoButton);
    }
    public createAddTodoButtonText() {
        this.addTodoButtonText = new PIXI.Text("ADD TODO", this.styleMedium);
        this.addTodoButtonText.position.set(130, 105);
        this.addChild(this.addTodoButtonText);
    } 
}
