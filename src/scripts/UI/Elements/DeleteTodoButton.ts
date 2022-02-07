import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class DeleteTodoButton extends PIXI.Container {
  private styleMedium: TextStyles | undefined;
  deleteTodoButton: PIXI.Graphics | undefined;
  deleteTodoButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.createDeleteTodoButton();
    this.createDeleteTodoButtonText();
  }

  public createDeleteTodoButton() {
    this.deleteTodoButton = new PIXI.Graphics();
    this.deleteTodoButton.beginFill(0x9e9a9b);
    this.deleteTodoButton.lineStyle(4, 0x000000, 1);
    this.deleteTodoButton.drawRect(350, 70, 200, 100);
    this.deleteTodoButton.interactive = true;
    this.deleteTodoButton.buttonMode = true;
    this.deleteTodoButton.endFill();
    this.addChild(this.deleteTodoButton);
  }

  public createDeleteTodoButtonText() {
      this.deleteTodoButtonText = new PIXI.Text("DELETE TODO", this.styleMedium);
      this.deleteTodoButtonText.position.set(362, 105);
    this.addChild(this.deleteTodoButtonText);
  }
}
