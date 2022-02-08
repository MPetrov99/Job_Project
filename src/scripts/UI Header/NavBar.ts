import * as PIXI from "pixi.js";
import { AddTodoButton } from "./Elements/AddTodoButton";
import { DeleteTodoButton } from "./Elements/DeleteTodoButton"; 
import { EditTodoButton } from "./Elements/EditTodoButton";
import { AscendingTodoButton } from "./Elements/AscendingTodoButton";
import { DescendingTodoButton } from "./Elements/DescendingTodoButton";
import { CreationDateButton } from "./Elements/CreationDateButton";
import { DueDateButton } from "./Elements/DueDateButton";
import { TitleButton } from "./Elements/TitleButton";
import { PriorityButton } from "./Elements/PriorityButton";
import { FilterText } from "./Elements/FilterText";
import { UnderButtonLine } from "./Elements/UnderButtonLine";

export class NavBar extends PIXI.Container{
    buttonAdd: AddTodoButton | undefined;
    buttonDelete: DeleteTodoButton | undefined;
    buttonEdit: EditTodoButton | undefined;
    buttonAscending: AscendingTodoButton | undefined;
    buttonDescending: DescendingTodoButton | undefined;
    buttonDueDate: DueDateButton | undefined;
    buttonCreationDate: CreationDateButton | undefined;
    buttonTitle: TitleButton | undefined;
    buttonPriority: PriorityButton | undefined;
    filterText: FilterText | undefined;
    line: UnderButtonLine |undefined;
    constructor() {
        super();
        this.addAddTodoButton();
        this.addDeleteTodoButton();
        this.addEditTodoButton();
        this.addAscendingTodoButton();
        this.addDescendingTodoButton();
        this.addCreationDateButton();
        this.addDueDateButton();
        this.addTitleButton();
        this.addPriorityButton();
        this.addFilterText();
        this.addLine();
    }

    // Adding the buttons to the Header of the UI
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
    
    public addDueDateButton() {
        this.buttonDueDate = new DueDateButton;
        this.addChild(this.buttonDueDate);
    }
    
    public addTitleButton() {
        this.buttonTitle = new TitleButton;
        this.addChild(this.buttonTitle);
    }

    public addPriorityButton() {
        this.buttonPriority = new PriorityButton;
        this.addChild(this.buttonPriority);
    }

    public addFilterText() {
        this.filterText = new FilterText;
        this.addChild(this.filterText);
    }

    public addLine() {
        this.line = new UnderButtonLine;
        this.addChild(this.line);
    }
}