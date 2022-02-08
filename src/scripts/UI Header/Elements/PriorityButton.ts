import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class PriorityButton extends BaseButton {
  private style: TextStyles | undefined;
  private styleSmall: TextStyles["textSmall"];
  private hover: BaseButton | undefined;
  priorityButton: PIXI.Graphics | undefined;
  priorityButtonText: PIXI.Text | undefined;

  constructor() {
    super();
    this.style = new TextStyles();
    this.styleSmall = this.style.textSmall;
    this.createPriorityButton();
    this.createPriorityButtonText();
    this.hover = new BaseButton();
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    this.on('pointerover', this.hover.mouseOver);
    this.on('pointerout', this.hover.mouseoff);
  }
  
  public createPriorityButton() {
    this.priorityButton = new PIXI.Graphics();
    this.priorityButton.beginFill(0x9e9a9b);
    this.priorityButton.lineStyle(3, 0x000000, 1);
    this.priorityButton.drawRect(1850, 100, 200, 45);
    this.priorityButton.endFill();
    this.addChild(this.priorityButton);
  }

  public createPriorityButtonText() {
    this.priorityButtonText = new PIXI.Text("PRIORITY", this.styleSmall);
    this.priorityButtonText.position.set(1905, 111);
    this.addChild(this.priorityButtonText);
  }
}
