import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class DescendingTodoButton extends PIXI.Container {
  private styleSmall: TextStyles | undefined;
  descendingTodoButton: PIXI.Graphics | undefined;
  descendingTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.createDescendingTodoButton();
    this.createDescendingTodoButtonText();
  }

  public createDescendingTodoButton() {
    this.descendingTodoButton = new PIXI.Graphics();
    this.descendingTodoButton.beginFill(0x9e9a9b);
    this.descendingTodoButton.lineStyle(3, 0x000000, 1);
    this.descendingTodoButton.drawRect(850, 125, 200, 45);
    this.descendingTodoButton.interactive = true;
    this.descendingTodoButton.buttonMode = true;
    this.descendingTodoButton.endFill();
    this.addChild(this.descendingTodoButton);
  }

  public createDescendingTodoButtonText() {
    this.descendingTodoButtonText = new PIXI.Text("DESCENDING", this.styleSmall);
    this.descendingTodoButtonText.position.set(865, 135);
    this.addChild(this.descendingTodoButtonText);
  }
}
