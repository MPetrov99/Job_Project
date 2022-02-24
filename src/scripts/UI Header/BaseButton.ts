import * as PIXI from "pixi.js";
// import { gsap } from "gsap";
// import { TodoView } from "../Views/TodoView";

export class BaseButton extends PIXI.Container{
    // public todo: TodoView | undefined;
    constructor() {
        super();
    }

    public mode() {

    }

    public mouseOver() {
        this.alpha = 1;
    }

    public mouseOff() {
        this.alpha = 0.45;
    }

    public mouseClick() {
        console.log("CLICKED !!!");
        // let todo = new TodoView("");
        // gsap.to(todo, 1, {pixi:{ x: 1000, duration: 1}});
    }

    public idle() {

    }
}
