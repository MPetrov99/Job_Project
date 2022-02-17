import * as PIXI from "pixi.js";
import { TodoView } from "./TodoView";

export class TodoBody extends PIXI.Container{
    backgorund: TodoView | undefined;
    constructor() {
        super();
        this.addBackground();
    }

    addBackground() {
        this.backgorund = new TodoView("Title", "Note", "Green", "20.02.2022", "24.02.2022");
        this.addChild(this.backgorund);
    }
}