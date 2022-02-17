import * as PIXI from "pixi.js";
// import * as PIXI from "../Views/TodoBody";
import { TodoListManager } from "./TodoListManager";
import { TextStyles } from "../UI Header/TextStyles";

export class TodoView extends TodoListManager {
   public title: string;
   public body: string;
   public priorityColor: string;
   public creationDate: string;
   public expireDate: string;
   private style: TextStyles | undefined;
   private styleSmall: TextStyles["textSmall"];
   private background: PIXI.Graphics | undefined;
   private titleBackground: PIXI.Graphics | undefined;
   private creationDateText: PIXI.Text | undefined;
   private expireDateText: PIXI.Text | undefined;
   // private todoTileInput: PIXI.PixiTestInput |undefined;
   // private todoTileInput = document.getElementById("inputTitle");
   constructor(title: string, body: string, priorityColor: string, creationDate: string, expireDate: string) {
      super();
      this.title = title;
      this.body = body;
      this.priorityColor = priorityColor;
      this.creationDate = creationDate;
      this.expireDate = expireDate;
      this.style = new TextStyles();
      this.styleSmall = this.style.textSmall;
      this.createBackground();
      this.createTitleBackground();
      this.createCreationDateText();
      this.createExpireDateText();
      this.createTitleTextInput();
   }

   public createBackground() {
      this.background = new PIXI.Graphics();
      this.background.beginFill(0xFFFFFF);
      this.background.lineStyle(4, 0x000000, 1);
      this.background.drawRect(450, 220, 1175, 400);
      this.background.endFill();
      this.addChild(this.background);
   }

   public createTitleBackground() {
      this.titleBackground = new PIXI.Graphics();
      this.titleBackground.beginFill(0x68DA74);
      this.titleBackground.lineStyle(4, 0x000000, 1);
      this.titleBackground.drawRect(450, 220, 1175, 150);
      this.titleBackground.endFill();
      this.addChild(this.titleBackground);
   }
   
   public createCreationDateText() { 
      this.creationDateText = new PIXI.Text("CREATION DATE: ", this.styleSmall);
      this.creationDateText.position.set(1100, 280);
      this.addChild(this.creationDateText);
   }

   public createExpireDateText() { 

      this.expireDateText = new PIXI.Text("EXPIRE DATE: ", this.styleSmall);
      this.expireDateText.position.set(1380, 280);
      this.addChild(this.expireDateText);
   }

   public createTitleTextInput() {
      
   }
   
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