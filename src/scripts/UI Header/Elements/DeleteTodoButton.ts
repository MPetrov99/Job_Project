import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";
// import { TodoBody } from "../../Views/TodoBody";

export class DeleteTodoButton extends BaseButton {
  // private todo: TodoBody | undefined;
  private style: TextStyles | undefined;
  private styleMedium: TextStyles["textSmall"];
  private buttonBackground: PIXI.Graphics | undefined;
  private buttonText: PIXI.Text | undefined;

  constructor() {
    super();
    
    this.style = new TextStyles();
    this.styleMedium = this.style.textMedium;
    
    this.createDeleteTodoButton();
    this.createDeleteTodoButtonText();
    
    this.interactive = true;
    this.buttonMode = true;
    this.alpha = 0.45;
    
    this.on('pointerover', () => {
      this.mouseOver();
    });
    this.mouseOver = this.mouseOver.bind(this);
    
    this.on('pointerout', () => { 
      this.mouseOff();
    });
    this.mouseOff = this.mouseOff.bind(this);
    
    this.on('pointerdown', () => { 
      this.mouseClick();
      // this.parent.parent.todo.selectedTodo.removeChild();
    });
    this.mouseClick = this.mouseClick.bind(this);
  }

  // public deleteTodo() {
  //   if this.on('pointerdown') = truw
  // }
  

  public createDeleteTodoButton() {
    this.buttonBackground = new PIXI.Graphics();
    this.buttonBackground.beginFill(0x9e9a9b);
    this.buttonBackground.lineStyle(4, 0x000000, 1);
    this.buttonBackground.drawRect(350, 70, 200, 100);
    this.buttonBackground.endFill();
    this.addChild(this.buttonBackground);
  }

  public createDeleteTodoButtonText() {
      this.buttonText = new PIXI.Text("DELETE TODO", this.styleMedium);
      this.buttonText.position.set(362, 105);
    this.addChild(this.buttonText);
  }
}
