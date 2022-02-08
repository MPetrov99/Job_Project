import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class DescendingTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  private hover: BaseButton | undefined;
  descendingTodoButton: PIXI.Graphics | undefined;
  descendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createDescendingTodoButton();
    this.createDescendingTodoButtonText();
    this.hover = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.hover.mouseOver);
    this.on('pointerout', this.hover.mouseoff);
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
