import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class EditTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  private hover: BaseButton | undefined;
  editTodoButton: PIXI.Graphics | undefined;
  editTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createEditTodoButton();
    this.createEditTodoButtonText();
    this.hover = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.hover.mouseOver);
    this.on('pointerout', this.hover.mouseoff);
  }

  public createEditTodoButton() {
    this.editTodoButton = new PIXI.Graphics();
    this.editTodoButton.beginFill(0x9e9a9b);
    this.editTodoButton.lineStyle(4, 0x000000, 1);
    this.editTodoButton.drawRect(600, 70, 200, 100);
    this.editTodoButton.endFill();
    this.addChild(this.editTodoButton);
  }

  public createEditTodoButtonText() {
    this.editTodoButtonText = new PIXI.Text("EDIT TODO", this.styleMedium);
    this.editTodoButtonText.position.set(630, 105);
    this.addChild(this.editTodoButtonText);
  }
}
