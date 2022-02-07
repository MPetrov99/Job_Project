import * as PIXI from "pixi.js";

export class TextStyles {
    textLarge: PIXI.TextStyle | undefined;
    textMedium: PIXI.TextStyle | undefined;
    textSmall: PIXI.TextStyle | undefined;
    
    constructor() {
        this.createLargeStyle();
        this.createMediumStyle();
        this.createSmallStyle();
    }

    public createLargeStyle() {
        this.textLarge = new PIXI.TextStyle({
              fontSize: 45,
              fontWeight: "bold",
              fill: "0x000000",
            });
    }

    public createMediumStyle() {
        this.textMedium = new PIXI.TextStyle({
            fontSize: 25,
            fontWeight: "bold",
            fill: "0x000000",
          });
    }

    public createSmallStyle() {
        this.textSmall = new PIXI.TextStyle({
            fontSize: 20,
            fontWeight: "bold",
            fill: "0x000000",
          });
    }
}