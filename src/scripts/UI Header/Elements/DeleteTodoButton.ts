import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class DeleteTodoButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  // private interaction: BaseButton | undefined;
  deleteTodoButton: PIXI.Graphics | undefined;
  deleteTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createDeleteTodoButton();
    this.createDeleteTodoButtonText();
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

  public createDeleteTodoButton() {
    this.deleteTodoButton = new PIXI.Graphics();
    this.deleteTodoButton.beginFill(0x9e9a9b);
    this.deleteTodoButton.lineStyle(4, 0x000000, 1);
    this.deleteTodoButton.drawRect(350, 70, 200, 100);
    this.deleteTodoButton.endFill();
    this.addChild(this.deleteTodoButton);
  }

  public createDeleteTodoButtonText() {
      this.deleteTodoButtonText = new PIXI.Text("DELETE TODO", this.styleMedium);
      this.deleteTodoButtonText.position.set(362, 105);
    this.addChild(this.deleteTodoButtonText);
  }
}
