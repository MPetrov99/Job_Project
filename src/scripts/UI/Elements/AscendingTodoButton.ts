import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class AscendingTodoButton extends PIXI.Container {
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  ascendingTodoButton: PIXI.Graphics | undefined;
  ascendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    this.createAscendingTodoButton();
    this.createAscendingTodoButtonText();
  }

  public createAscendingTodoButton() {
    this.ascendingTodoButton = new PIXI.Graphics();
    this.ascendingTodoButton.beginFill(0x9e9a9b);
    this.ascendingTodoButton.lineStyle(3, 0x000000, 1);
    this.ascendingTodoButton.drawRect(850, 70, 200, 45);
    this.ascendingTodoButton.interactive = true;
    this.ascendingTodoButton.buttonMode = true;
    this.ascendingTodoButton.endFill();
    this.addChild(this.ascendingTodoButton);
  }

  public createAscendingTodoButtonText() {
    this.ascendingTodoButtonText = new PIXI.Text("ASCENDING", this.styleMedium);
    this.ascendingTodoButtonText.position.set(870, 78);
    this.addChild(this.ascendingTodoButtonText);
  }
}
