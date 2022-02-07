import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class CreationDateButton extends PIXI.Container {
  private styleSmall: TextStyles | undefined;
  creationDateButton: PIXI.Graphics | undefined;
  creationDateButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.createCreationDateButton();
    this.createCreationDateButtonText();
  }

  public createCreationDateButton() {
    this.creationDateButton = new PIXI.Graphics();
    this.creationDateButton.beginFill(0x9e9a9b);
    this.creationDateButton.lineStyle(4, 0x000000, 1);
    this.creationDateButton.drawRect(1100, 100, 200, 45);
    this.creationDateButton.interactive = true;
    this.creationDateButton.buttonMode = true;
    this.creationDateButton.endFill();
    this.addChild(this.creationDateButton);
  }

  public createCreationDateButtonText() {
    this.creationDateButtonText = new PIXI.Text("CREATION DATE", this.styleSmall);
    this.creationDateButtonText.position.set(1120, 111);
    this.addChild(this.creationDateButtonText);
  }
}