import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class CreationDateButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  private hover: BaseButton | undefined;
  creationDateButton: PIXI.Graphics | undefined;
  creationDateButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    this.createCreationDateButton();
    this.createCreationDateButtonText();
    this.hover = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.hover.mouseOver);
    this.on('pointerout', this.hover.mouseoff);
  }

  public createCreationDateButton() {
    this.creationDateButton = new PIXI.Graphics();
    this.creationDateButton.beginFill(0x9e9a9b);
    this.creationDateButton.lineStyle(3, 0x000000, 1);
    this.creationDateButton.drawRect(1100, 100, 200, 45);
    this.creationDateButton.endFill();
    this.addChild(this.creationDateButton);
  }
  public createCreationDateButtonText() {
    this.creationDateButtonText = new PIXI.Text("CREATION DATE", this.styleSmall);
    this.creationDateButtonText.position.set(1120, 111);
    this.addChild(this.creationDateButtonText);
  }
}