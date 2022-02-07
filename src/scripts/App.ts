// import * as _ from "lodash";
import * as PIXI from "pixi.js";
import { BaseButton } from "./Buttons/BaseButton";
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

// const app = new PIXI.Application({
//   width: window.screen.width,
//   height: window.screen.height,
//   backgroundColor: 0xfff4de,
// });

// app.renderer.view.style.position = "absolute";

// document.body.appendChild(app.view);

// const Graphics = PIXI.Graphics;

// // Text Styles

// const textStyleSmall = new PIXI.TextStyle({
//   fontSize: 20,
//   fontWeight: "bold",
//   fill: "0x000000",
// });

// const textStyleMedium = new PIXI.TextStyle({
//   fontSize: 25,
//   fontWeight: "bold",
//   fill: "0x000000",
// });

// const textStyleBig = new PIXI.TextStyle({
//   fontSize: 45,
//   fontWeight: "bold",
//   fill: "0x000000",
// });

// // Add ToDo Button
// const addTodoContainer = new PIXI.Container();

// const addTodoRect = new Graphics();
// addTodoRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(4, 0x000000, 1)
//   .drawRect(100, 70, 200, 100)
//   .endFill();

// addTodoContainer.addChild(addTodoRect);

// const addTodoText = new PIXI.Text("ADD TODO", textStyleMedium);
// addTodoText.position.set(130, 105);

// addTodoContainer.addChild(addTodoText);

// addTodoContainer.interactive = true;
// addTodoContainer.buttonMode = true;

// app.stage.addChild(addTodoContainer);

// // Delete ToDo Button
// const deleteTodoContainer = new PIXI.Container();

// const deleteTodoRect = new Graphics();
// deleteTodoRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(4, 0x000000, 1)
//   .drawRect(350, 70, 200, 100)
//   .endFill();

// deleteTodoContainer.addChild(deleteTodoRect);

// const deleteTodoText = new PIXI.Text("DELETE TODO", textStyleMedium);
// deleteTodoText.position.set(362, 105);

// deleteTodoContainer.addChild(deleteTodoText);

// deleteTodoContainer.interactive = true;
// deleteTodoContainer.buttonMode = true;

// app.stage.addChild(deleteTodoContainer);


// // Edit ToDo Button
// const editTodoContainer = new PIXI.Container;

// const editTodoRect = new Graphics();
// editTodoRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(4, 0x000000, 1)
//   .drawRect(600, 70, 200, 100)
//   .endFill();

// editTodoContainer.addChild(editTodoRect);

// const editTodoText = new PIXI.Text("EDIT TODO", textStyleMedium);
// editTodoText.position.set(630, 105);

// editTodoContainer.addChild(editTodoText);

// editTodoContainer.interactive = true;
// editTodoContainer.buttonMode = true;

// app.stage.addChild(editTodoContainer);

// // Ascdeing ToDo Button
// const ascendingTodoContainer = new PIXI.Container;

// const ascendingTodoRect = new Graphics();
// ascendingTodoRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(850, 65, 200, 45)
//   .endFill();

// ascendingTodoContainer.addChild(ascendingTodoRect);

// const ascendingTodoText = new PIXI.Text("ASCENDING", textStyleMedium);
// ascendingTodoText.position.set(870, 75);

// ascendingTodoContainer.addChild(ascendingTodoText);

// ascendingTodoContainer.interactive = true;
// ascendingTodoContainer.buttonMode = true;

// app.stage.addChild(ascendingTodoContainer);

// // Descending ToDo Button
// const descendingTodoContainer = new PIXI.Container;

// const descendingTodoRect = new Graphics();
// descendingTodoRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(850, 125, 200, 45)
//   .endFill();

// descendingTodoContainer.addChild(descendingTodoRect);

// const descendingTodoText = new PIXI.Text("DESCENDING", textStyleMedium);
// descendingTodoText.position.set(865, 135);

// descendingTodoContainer.addChild(descendingTodoText);

// descendingTodoContainer.interactive = true;
// descendingTodoContainer.buttonMode = true;

// app.stage.addChild(descendingTodoContainer);

// // Filter by Creation Date Button
// const creationDateContainer = new PIXI.Container;

// const creationDateRect = new Graphics();
// creationDateRect
//   .beginFill(0x9e9a9b)
//   .lineStyle(3, 0x000000, 1)
//   .drawRect(1100, 100, 200, 45)
//   .endFill();

// creationDateContainer.addChild(creationDateRect);

// const creationDateText = new PIXI.Text("CREATION DATE", textStyleSmall);
// creationDateText.position.set(1120, 111);

// creationDateContainer.addChild(creationDateText);

// creationDateContainer.interactive = true;
// creationDateContainer.buttonMode = true;

// app.stage.addChild(creationDateContainer);

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

// // class Application extends PIXI.Application {
// //  constructor() {
// //    super();
// //  }
// // }
