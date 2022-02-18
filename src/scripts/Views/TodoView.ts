import * as PIXI from "pixi.js";
import TextInput, { InputOption } from "pixi-drawable-textinput";
import { TodoListManager } from "./TodoListManager";
import { TextStyles } from "../UI Header/TextStyles";

export class TodoView extends TodoListManager {
   public title: string;
   public body: string;
   public priorityColor: string;
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
   private greenButton: PIXI.Graphics | undefined;
   private yellowButton: PIXI.Graphics | undefined;
   private redButton: PIXI.Graphics | undefined;
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
      this.createDescriptionTextInput();
      this.createCreationDateInput();
      this.createExpireDateInput();
      // this.changeBackground();
   //    this.createGreenButton();
   //    this.createYellowButton();
   //    this.createRedButton();
      this.createPriorityButtons();
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
      // this.titleBackground.interactive = true;
      // this.titleBackground.buttonMode = true;
      // this.titleBackground.on('pointerdown', this.changeBackgroundOnClick);
      // this.changeBackgroundOnClick = this.changeBackgroundOnClick.bind(this);
      this.addChild(this.titleBackground);
   }
   
   public createCreationDateText() { 
      this.creationDateText = new PIXI.Text("CREATION DATE: ", this.styleSmall);
      this.creationDateText.position.set(1050, 280);
      this.addChild(this.creationDateText);
   }

   public createExpireDateText() { 
      this.expireDateText = new PIXI.Text("EXPIRE DATE: ", this.styleSmall);
      this.expireDateText.position.set(1360, 280);
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
      this.addChild(this.expireDateInput);
   }

   // public createGreenButton() {
   //    this.greenButton = new PIXI.Graphics();
   //    this.greenButton.beginFill(0x68DA74);
   //    this.greenButton.lineStyle(4, 0x000000, 1);
   //    this.greenButton.drawRect(460, 230, 30, 30);
   //    this.greenButton.endFill();
   //    this.greenButton.interactive = true;
   //    this.greenButton.buttonMode = true;
   //    this.addChild(this.greenButton);
   // }

   // public createYellowButton() {
   //    this.yellowButton = new PIXI.Graphics();
   //    this.yellowButton.beginFill(0xFDE900);
   //    this.yellowButton.lineStyle(4, 0x000000, 1);
   //    this.yellowButton.drawRect(460, 280, 30, 30);
   //    this.yellowButton.endFill();
   //    this.yellowButton.interactive = true;
   //    this.yellowButton.buttonMode = true;
   //    this.addChild(this.yellowButton);
   // }

   // public createRedButton() {
   //    this.redButton = new PIXI.Graphics();
   //    this.redButton.beginFill(0xE2260B);
   //    this.redButton.lineStyle(4, 0x000000, 1);
   //    this.redButton.drawRect(460, 330, 30, 30);
   //    this.redButton.endFill();
   //    this.redButton.interactive = true;
   //    this.redButton.buttonMode = true;
   //    this.addChild(this.redButton);
   // }

   public createPriorityButtons() {
      this.greenButton = new PIXI.Graphics();
      this.greenButton.beginFill(0x68DA74);
      this.greenButton.lineStyle(4, 0x000000, 1);
      this.greenButton.drawRect(460, 230, 30, 30);
      this.greenButton.endFill();
      this.greenButton.interactive = true;
      this.greenButton.buttonMode = true;
      this.addChild(this.greenButton);
      this.yellowButton = new PIXI.Graphics();
      this.yellowButton.beginFill(0xFDE900);
      this.yellowButton.lineStyle(4, 0x000000, 1);
      this.yellowButton.drawRect(460, 280, 30, 30);
      this.yellowButton.endFill();
      this.yellowButton.interactive = true;
      this.yellowButton.buttonMode = true;
      this.addChild(this.yellowButton);
      this.redButton = new PIXI.Graphics();
      this.redButton.beginFill(0xE2260B);
      this.redButton.lineStyle(4, 0x000000, 1);
      this.redButton.drawRect(460, 330, 30, 30);
      this.redButton.endFill();
      this.redButton.interactive = true;
      this.redButton.buttonMode = true;
      this.addChild(this.redButton);
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
