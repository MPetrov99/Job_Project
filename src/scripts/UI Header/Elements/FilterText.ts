import * as PIXI from "pixi.js";
import { BaseButton } from "../BaseButton";
import { TextStyles } from "../TextStyles";

export class FilterText extends BaseButton {
    private style: TextStyles | undefined;
    private styleLarge: TextStyles["textLarge"];
    filterText: PIXI.Text | undefined;

    constructor() {
        super();
        this.style = new TextStyles();
        this.styleLarge = this.style.textLarge;
        this.createFilterText();
    }

    public createFilterText() { 
        this.filterText = new PIXI.Text("FILTERS", this.styleLarge);
        this.filterText.position.set(1480, 35);
        this.addChild(this.filterText);
    }
}