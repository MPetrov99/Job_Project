import * as PIXI from "pixi.js";
import { BaseButton } from "./UI/BaseButton";
// import { ToDoView } from "./View/todoview";

export class Application {
  private app: PIXI.Application = new PIXI.Application({
    resizeTo: window,
    backgroundColor: 0xfff4de
  });
  scene: BaseButton | undefined;
  constructor() {
    this.run();
  }
  public run() {
    document.body.appendChild(this.app.view);
    this.scene = new BaseButton();
    this.app.stage.addChild(this.scene);
  }
}