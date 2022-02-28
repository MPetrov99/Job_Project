import * as PIXI from "pixi.js";
// import { TodoBody } from "./TodoBody";
// import { gsap } from "gsap";

export class TodoListManager extends PIXI.Container {
    // public selectedTodo: undefined;
    constructor() {
        super();
        this.sortableChildren = true;
        // this.deleteTodo();
    }
    
    //  public mouseClick() {
    //     console.log("CLICKED !!!");
    //     if (this.parent instanceof TodoBody) {
    //         this.parent.selectedTodo = this; 
    //     }
        // this.parent.selectedTodo = this;
        // instanceof TodoBody this.parent.selectedTodo = this;
        // (this.parent as any).selectedTodo = this;
    // }
        // public add() {
        // gsap.to();
        // }
    
        // public deleteTodo() {
        //     this.parent.removeChild(this);
        // }

    //     public sorting() {
    
    //     }
}