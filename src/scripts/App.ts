import * as PIXI from "pixi.js";
import { NavBar } from "./UI Header/NavBar";
// import { ToDoView } from "./View/todoview";

export class Application {
  private app: PIXI.Application = new PIXI.Application({
    resizeTo: window,
    backgroundColor: 0xfff4de
  });
  scene: NavBar | undefined;
  constructor() {
    this.run();
  }
  public run() {
    document.body.appendChild(this.app.view);
    this.scene = new NavBar();
    this.app.stage.addChild(this.scene);
  }
}