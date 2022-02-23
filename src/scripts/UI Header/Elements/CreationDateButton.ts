import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class CreationDateButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  private buttonBackground: PIXI.Graphics | undefined;
  private buttonText: PIXI.Text | undefined;

  constructor() {
    super();
    
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    
    this.createCreationDateButton();
    this.createCreationDateButtonText();
    
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
    this.buttonBackground = new PIXI.Graphics();
    this.buttonBackground.beginFill(0x9e9a9b);
    this.buttonBackground.lineStyle(3, 0x000000, 1);
    this.buttonBackground.drawRect(1100, 100, 200, 45);
    this.buttonBackground.endFill();
    this.addChild(this.buttonBackground);
  }
  public createCreationDateButtonText() {
    this.buttonText = new PIXI.Text("CREATION DATE", this.styleSmall);
    this.buttonText.position.set(1120, 111);
    this.addChild(this.buttonText);
  }
}