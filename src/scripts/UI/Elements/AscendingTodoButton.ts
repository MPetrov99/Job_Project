import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class AscendingTodoButton extends PIXI.Container {
  private styleSmall: TextStyles | undefined;
  ascendingTodoButton: PIXI.Graphics | undefined;
  ascendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
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
    this.ascendingTodoButtonText = new PIXI.Text("ASCENDING", this.styleSmall);
    this.ascendingTodoButtonText.position.set(870, 75);
    this.addChild(this.ascendingTodoButtonText);
  }
}
