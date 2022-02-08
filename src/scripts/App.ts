// import * as _ from "lodash";
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

// // Filters Text
// const filterText = new PIXI.Text("FILTERS", textStyleBig);
// filterText.position.set(1480, 35);

// app.stage.addChild(filterText);

// const line = new Graphics();
// line.lineStyle(5, 0x000000, 1).moveTo(0, 200).lineTo(2500, 200);

// app.stage.addChild(line);
