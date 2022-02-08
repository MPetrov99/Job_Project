import * as PIXI from "pixi.js";
import { TextStyles } from "../TextStyles";

export class FilterText extends PIXI.Container {
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







// // Filters Text
// const filterText = new PIXI.Text("FILTERS", textStyleBig);
// filterText.position.set(1480, 35);

// app.stage.addChild(filterText);

// const line = new Graphics();
// line.lineStyle(5, 0x000000, 1).moveTo(0, 200).lineTo(2500, 200);

// app.stage.addChild(line);
