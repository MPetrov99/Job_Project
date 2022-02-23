import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class DescendingTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  private buttonBackground: PIXI.Graphics | undefined;
  private buttonText: PIXI.Text | undefined;

  constructor() {
    super();
    
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    
    this.createDescendingTodoButton();
    this.createDescendingTodoButtonText();
    
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

  public createDescendingTodoButton() {
    this.buttonBackground = new PIXI.Graphics();
    this.buttonBackground.beginFill(0x9e9a9b);
    this.buttonBackground.lineStyle(3, 0x000000, 1);
    this.buttonBackground.drawRect(850, 125, 200, 45);
    this.buttonBackground.endFill();
    this.addChild(this.buttonBackground);
  }

  public createDescendingTodoButtonText() {
    this.buttonText = new PIXI.Text("DESCENDING", this.styleMedium);
    this.buttonText.position.set(865, 133);
    this.addChild(this.buttonText);
  }
}
