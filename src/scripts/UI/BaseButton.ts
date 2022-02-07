import * as PIXI from "pixi.js";
import { AddTodoButton } from "./Elements/AddTodoButton";
import { DeleteTodoButton } from "./Elements/DeleteTodoButton"; 
import { EditTodoButton } from "./Elements/EditTodoButton";
import { AscendingTodoButton } from "./Elements/AscendingTodoButton";
import { DescendingTodoButton } from "./Elements/DescendingTodoButton";
import { CreationDateButton } from "./Elements/CreationDateButton";

export class BaseButton extends PIXI.Container{
    buttonAdd: AddTodoButton | undefined;
    buttonDelete: DeleteTodoButton | undefined;
    buttonEdit: EditTodoButton | undefined;
    buttonAscending: AscendingTodoButton | undefined;
    buttonDescending: DescendingTodoButton | undefined;
    buttonCreationDate: CreationDateButton | undefined;
    constructor() {
        super();
        this.addAddTodoButton();
        this.addDeleteTodoButton();
        this.addEditTodoButton();
        this.addAscendingTodoButton();
        this.addDescendingTodoButton();
        this.addCreationDateButton();
    }
    public addAddTodoButton() {
        this.buttonAdd = new AddTodoButton;
        this.addChild(this.buttonAdd);
    }

    public addDeleteTodoButton() { 
        this.buttonDelete = new DeleteTodoButton;
        this.addChild(this.buttonDelete);
    }

    public addEditTodoButton() {
        this.buttonEdit = new EditTodoButton;
        this.addChild(this.buttonEdit)
    }

    public addAscendingTodoButton() { 
        this.buttonAscending = new AscendingTodoButton;
        this.addChild(this.buttonAscending);
    }

    public addDescendingTodoButton() {
        this.buttonDescending = new DescendingTodoButton;
        this.addChild(this.buttonDescending);
    }

    public addCreationDateButton() {
        this.buttonCreationDate = new CreationDateButton;
        this.addChild(this.buttonCreationDate);
    }

    public mode() {

    }

    public mouseOver() {

    }

    public mouseClick() {

    }

    public idle() {

    }
}
