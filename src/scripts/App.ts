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

// //Filter by Due Date Button
// const dueDateContainer = new PIXI.Container;

// const dueDateRect = new Graphics();
// dueDateRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(1350, 100, 200, 45)
//   .endFill();

// dueDateContainer.addChild(dueDateRect);

// const dueDateText = new PIXI.Text("DUE DATE", textStyleSmall);
// dueDateText.position.set(1400, 111);

// dueDateContainer.addChild(dueDateText);

// dueDateContainer.interactive = true;
// dueDateContainer.buttonMode = true;

// app.stage.addChild(dueDateContainer);

// //Filter by Title Button
// const titleContainer = new PIXI.Container;

// const titleRect = new Graphics();
// titleRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(1600, 100, 200, 45)
//   .endFill();

// titleContainer.addChild(titleRect);

// const titleText = new PIXI.Text("TITLE", textStyleSmall);
// titleText.position.set(1670, 111);

// titleContainer.addChild(titleText);

// titleContainer.interactive = true;
// titleContainer.buttonMode = true;

// app.stage.addChild(titleContainer);

// // Filter by Priority Button
// const priorityContainer = new PIXI.Container;

// const priorityRect = new Graphics();
// priorityRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(1850, 100, 200, 45)
//   .endFill();

// priorityContainer.addChild(priorityRect);

// const priorityText = new PIXI.Text("PRIORITY", textStyleSmall);
// priorityText.position.set(1905, 111);

// priorityContainer.addChild(priorityText);

// priorityContainer.interactive = true;
// priorityContainer.buttonMode = true;

// app.stage.addChild(priorityContainer);

// // Filters Text
// const filterText = new PIXI.Text("FILTERS", textStyleBig);
// filterText.position.set(1480, 35);

// app.stage.addChild(filterText);

// const line = new Graphics();
// line.lineStyle(5, 0x000000, 1).moveTo(0, 200).lineTo(2500, 200);

// app.stage.addChild(line);
