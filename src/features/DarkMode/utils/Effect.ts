import { CustomSymbol } from "./Symbol";

export class Effect {
  constructor(
    public canvasWidth: number,
    public canvasHeight: number,
    public fontSize?: number,
    public columns?: number,
    public symbols?: CustomSymbol[]
  ) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.fontSize = 25;
    this.columns = this.canvasWidth / this.fontSize;
    this.symbols = [];
    this.initialize();
  }

  initialize() {
    if (this.fontSize && this.columns && this.symbols) {
      for (let i = 0; i < this.columns; i++) {
        this.symbols[i] = new CustomSymbol({
          x: i,
          y: 0,
          fontSize: this.fontSize,
          canvasHeight: this.canvasHeight,
        });
      }
      window.addEventListener("resize", () => {
        this.canvasWidth = window.innerWidth;
        if (this.fontSize) this.columns = this.canvasWidth / this.fontSize;
      });
    }
  }
  resize(width: number, height: number) {
    if (this.fontSize) {
      this.canvasWidth = width;
      this.canvasHeight = height;
      this.columns = this.canvasWidth / this.fontSize;
      this.symbols = [];
      this.initialize();
    }
  }
}
