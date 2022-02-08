import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class TitleButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  private hover: BaseButton | undefined;
  titleButton: PIXI.Graphics | undefined;
  titleButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    this.createTitleButton();
    this.createTitleButtonText();
    this.hover = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.hover.mouseOver);
    this.on('pointerout', this.hover.mouseoff);
  }

  public createTitleButton() {
    this.titleButton = new PIXI.Graphics();
    this.titleButton.beginFill(0x9e9a9b);
    this.titleButton.lineStyle(3, 0x000000, 1);
    this.titleButton.drawRect(1600, 100, 200, 45);
    this.titleButton.endFill();
    this.addChild(this.titleButton);
  }

  public createTitleButtonText() {
    this.titleButtonText = new PIXI.Text("TITLE", this.styleSmall);
    this.titleButtonText.position.set(1670, 111);
    this.addChild(this.titleButtonText);
  }
}