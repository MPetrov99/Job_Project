import { TodoListManager } from "./TodoListManager";

export class TodoView extends TodoListManager {
  background: PIXI.Graphics | undefined;
   // private titleBackground: PIXI.Graphics | undefined;
   constructor() {
      super();
      this.createBackground();
      // this.createTitleBackground();
   }

   public createBackground() {
      this.background = new PIXI.Graphics;
      this.background.beginFill(0x9e9a9b);
      this.background.lineStyle(4, 0x000000, 1);
      this.background.drawRect(1000, 400, 200, 100);
      this.background.endFill();
      this.addChild(this.background);
   }

   // public createTitleBackground() {

   // }
   
//    public selectable() {

//    }

//    public editable() {

//    }

//    public state() {

//    }

//    public visual() {

//    }

//    public editMode() {

//    }

//    public overdue() {
       
//    }
} 