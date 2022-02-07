import * as PIXI from "pixi.js";

export class BaseButton extends PIXI.Container{
    // container: PIXI.Container;
    addTodoButton: PIXI.Graphics | undefined;
    constructor() {
        super();
        // this.container = new PIXI.Container();

        // this.addChild(this.container);

        this.createAddTodoButton();
    }
    public createAddTodoButton(): void {
        this.addTodoButton = new PIXI.Graphics;
        this.addTodoButton.beginFill(0x9e9a9b);
        this.addTodoButton.lineStyle(4, 0x000000, 1);
        this.addTodoButton.drawRect(100, 70, 200, 100);
        this.addTodoButton.endFill();
        this.addChild(this.addTodoButton);
        // console.log(this.addTodoButton);
    }
}
