import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class DescendingTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  // private interaction: BaseButton | undefined;
  descendingTodoButton: PIXI.Graphics | undefined;
  descendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createDescendingTodoButton();
    this.createDescendingTodoButtonText();
    // this.interaction = new BaseButton();
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
    this.descendingTodoButton = new PIXI.Graphics();
    this.descendingTodoButton.beginFill(0x9e9a9b);
    this.descendingTodoButton.lineStyle(3, 0x000000, 1);
    this.descendingTodoButton.drawRect(850, 125, 200, 45);
    this.descendingTodoButton.endFill();
    this.addChild(this.descendingTodoButton);
  }

  public createDescendingTodoButtonText() {
    this.descendingTodoButtonText = new PIXI.Text("DESCENDING", this.styleMedium);
    this.descendingTodoButtonText.position.set(865, 133);
    this.addChild(this.descendingTodoButtonText);
  }
}
