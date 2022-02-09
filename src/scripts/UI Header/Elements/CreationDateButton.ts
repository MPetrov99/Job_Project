import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class CreationDateButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  // private interaction: BaseButton | undefined;
  creationDateButton: PIXI.Graphics | undefined;
  creationDateButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    this.createCreationDateButton();
    this.createCreationDateButtonText();
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