import * as PIXI from "pixi.js";
import { NavBar } from "./UI Header/NavBar";
import { TodoBody } from "./View/TodoBody";

export class Application {
  private app: PIXI.Application = new PIXI.Application({
    resizeTo: window,
    backgroundColor: 0xfff4de
  });
  scene: NavBar | undefined;
  todo: TodoBody | undefined;
  constructor() {
    this.run();
  }
  public run() {
    document.body.appendChild(this.app.view);
    this.scene = new NavBar();
    this.app.stage.addChild(this.scene);
    this.todo = new TodoBody();
    this.app.stage.addChild(this.todo);
  }
}