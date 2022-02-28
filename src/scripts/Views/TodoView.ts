import * as PIXI from "pixi.js";
import TextInput, { InputOption } from "pixi-drawable-textinput";
import { TodoListManager } from "./TodoListManager";
import { TextStyles } from "../UI Header/TextStyles";
// import { TodoBody } from "./TodoBody";
// import { Controller } from "../Controllers/Controller";
// import { gsap } from "gsap";

export class TodoView extends TodoListManager {
   public title: string;
   public body: string;
   // public priorityColor: string;
   public creationDate: string;
   public expireDate: string;
   public titleTextStyle: InputOption | undefined;
   public titleText: TextInput | undefined;
   public descriptionTextStyle: InputOption | undefined;
   public descriptionText: TextInput | undefined;
   public creationDateInputStyle: InputOption | undefined;
   public creatioDateInput: TextInput | undefined;
   public expireDateInputStyle: InputOption | undefined;
   public expireDateInput: TextInput | undefined;
   private style: TextStyles | undefined;
   private styleSmall: TextStyles["textSmall"];
   private background: PIXI.Graphics | undefined;
   private titleBackground: PIXI.Graphics | undefined;
   private creationDateText: PIXI.Text | undefined;
   private expireDateText: PIXI.Text | undefined;
   // constructor(title: string, body: string, priorityColor: string, creationDate: string, expireDate: string) {
      constructor(title: string, body: string, creationDate: string, expireDate: string) {   
         super();
         
         this.title = title;
         this.body = body;
         // this.priorityColor = priorityColor;
         
         this.creationDate = creationDate;
         this.expireDate = expireDate;
         this.style = new TextStyles();
         this.styleSmall = this.style.textSmall;
         
         this.interactive = true;
         
         this.createBackground();
         this.createTitleBackground();
         this.createCreationDateText();
         this.createExpireDateText();
         this.createTitleTextInput();
         this.createDescriptionTextInput();
         this.createCreationDateInput();
         this.createExpireDateInput();
         this.createGreenButton();
         this.createYellowButton();
         this.createRedButton();
         
         // this.on('pointerdown', () => this.mouseClick)
         // this.on('pointerdown', this.selectTodo)
         // this.selectTodo = this.selectTodo.bind(this);
        
         this.on('pointerdown', () => {
            console.log("CLICKED !!!");
            global.selectedTodo = this;
            // this.interactive = false;
            // this.parent.removeChild(this);
          });

         // this.removeTodo();
         // this.saveTodoData();
         // this.printData();
      }

      public disposeOf() {
         this.parent.removeChild(this);
      }

      // public selectTodo() {
      //    console.log("CLICKED !!!");
      //    if (this.parent instanceof TodoBody) {
      //        this.parent.selectedTodo = this; 
      //        console.log(this.parent.selectedTodo)
      //    }
      // }
      // public removeTodo() {
      //    this.parent.removeChild(this);
      // }

   //    public mouseClick() {
   //       console.log("CLICKED !!!");
   //       this.parent.selectedTodo? = this;
   //   }

      // public saveTodoData() {
      //    Controller.saveTodos({

      //    })
      // }
   
      // public saveData() {
      // let localStorage = window.localStorage;
      //    const todoData = {
      //       titleData: this.title,
      //       bodyData: this.body,
      //       creationDateData: this.creationDate,
      //       expireDateData: this.expireDate
      //    }
      //    localStorage.setItem("data", JSON.stringify(todoData));
      //    localStorage.getItem("data");
      //    console.log(localStorage);
      // }

      // public printData() {
      //    console.log(Controller.getTodos());
      // }
      
   public createBackground() {
      this.background = new PIXI.Graphics();
      this.background.beginFill(0xFFFFFF);
      this.background.lineStyle(4, 0x000000, 1);
      this.background.drawRect(450, 220, 1175, 400);
      this.background.endFill();
      this.addChild(this.background);
   }

   public createTitleBackground(color: number = 0x68DA74) {
      this.titleBackground = new PIXI.Graphics();
      this.titleBackground.beginFill(color);
      this.titleBackground.lineStyle(4, 0x000000, 1);
      this.titleBackground.drawRect(450, 220, 1175, 150);
      this.titleBackground.endFill();
      this.titleBackground.zIndex = 0;
      this.addChild(this.titleBackground);
   }
   
   public createCreationDateText() { 
      this.creationDateText = new PIXI.Text("CREATION DATE: ", this.styleSmall);
      this.creationDateText.position.set(1050, 280);
      this.creationDateText.zIndex = 1;
      this.addChild(this.creationDateText);
   }

   public createExpireDateText() { 
      this.expireDateText = new PIXI.Text("EXPIRE DATE: ", this.styleSmall);
      this.expireDateText.position.set(1360, 280);
      this.expireDateText.zIndex = 1;
      this.addChild(this.expireDateText);
   }

   public createTitleTextInput() {
      this.titleTextStyle = new InputOption();
      this.titleTextStyle.style = { fontSize: 40, fontWeight: "bold" };
      this.titleTextStyle.placeHolder = "Name the Todo";
      this.titleTextStyle.borderColor.alpha = 0;
      this.titleTextStyle.backgroundColor = { color: 0x68DA74, alpha: 0 };
      this.titleTextStyle.width = 300;
      this.titleTextStyle.height = 100;
      this.titleTextStyle.onChange = (value) => {
         console.log(value);
         this.title = value + "";
      }
      this.titleText = new TextInput(this.titleTextStyle);
      this.titleText.position.set(570, 245);
      this.titleText.zIndex = 1;
      this.addChild(this.titleText);
   }

   public createDescriptionTextInput() {
      this.descriptionTextStyle = new InputOption();
      this.descriptionTextStyle.style = { fontSize: 30, fontWeight: "bold" };
      this.descriptionTextStyle.placeHolder = "Describe the Todo";
      this.descriptionTextStyle.borderColor.alpha = 0;
      this.descriptionTextStyle.backgroundColor = { color: 0xFFFFFF, alpha: 0 };
      this.descriptionTextStyle.width = 1100;
      this.descriptionTextStyle.height = 200;
      this.descriptionTextStyle.onChange = (value) => {
         console.log(value);
         this.body = value + "";
      }
      this.descriptionText = new TextInput(this.descriptionTextStyle);
      this.descriptionText.position.set(485, 400);
      this.addChild(this.descriptionText);
   }

   public createCreationDateInput() {
      this.creationDateInputStyle = new InputOption();
      this.creationDateInputStyle.style = { fontSize: 20, fontWeight: "bold" };
      this.creationDateInputStyle.placeHolder = " - - - ";
      this.creationDateInputStyle.borderColor.alpha = 0;
      this.creationDateInputStyle.backgroundColor = { color: 0xFFFFFF, alpha: 0 };
      this.creationDateInputStyle.width = 130;
      this.creationDateInputStyle.height = 50;
      this.creationDateInputStyle.onChange = (value) => {
         console.log(value);
         this.creationDate = value + "";
      }
      this.creatioDateInput = new TextInput(this.creationDateInputStyle);
      this.creatioDateInput.position.set(1220, 266);
      this.creatioDateInput.zIndex = 1;
      this.addChild(this.creatioDateInput);
   }

   public createExpireDateInput() {
      this.expireDateInputStyle = new InputOption();
      this.expireDateInputStyle.style = { fontSize: 20, fontWeight: "bold" };
      this.expireDateInputStyle.placeHolder = " - - - ";
      this.expireDateInputStyle.borderColor.alpha = 0;
      this.expireDateInputStyle.backgroundColor = { color: 0xFFFFFF, alpha: 0 };
      this.expireDateInputStyle.width = 130;
      this.expireDateInputStyle.height = 50;
      this.expireDateInputStyle.onChange = (value) => {
         console.log(value);
         this.expireDate = value + "";
      }
      this.expireDateInput = new TextInput(this.expireDateInputStyle);
      this.expireDateInput.position.set(1500, 266);
      this.expireDateInput.zIndex = 1;
      this.addChild(this.expireDateInput);
   }

   public changeBackgroundOnClick(color: number) {
      this.titleBackground?.clear();
      this.createTitleBackground(color);
      console.log("CLICKED !!!");
  }

   public createPriorityButtons(color: number, position: { x: number, y: number }) {
      let button = new PIXI.Graphics();
      const { x, y } = position;
      button = new PIXI.Graphics();
      button.beginFill(color);
      button.lineStyle(4, 0x000000, 1);
      button.drawRect(x, y, 30, 30);
      button.endFill();
      button.interactive = true;
      button.buttonMode = true;
      button.zIndex = 1;
      button.on('pointerdown', () => this.changeBackgroundOnClick(color));
      this.addChild(button);
   }

   public createGreenButton() {
      this.createPriorityButtons(0x68DA74, { x: 460, y: 230 });
   }

   public createYellowButton() {
      this.createPriorityButtons(0xFDE900, { x: 460, y: 280 });
   }

   public createRedButton() {
      this.createPriorityButtons(0xE2260B, { x: 460, y: 330 });
   }

   // public moveDownOnClick() {
   //    this.gsap.to
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
