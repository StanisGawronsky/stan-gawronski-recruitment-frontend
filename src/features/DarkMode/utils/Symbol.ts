interface SymbolConfig {
  x: number;
  y: number;
  canvasHeight: number;
  fontSize: number;
  characters?: string;
  text?: string;
}

export class CustomSymbol {
  constructor(public config: SymbolConfig) {
    const { canvasHeight, fontSize, x, y } = config;

    this.config.characters = `${CHINESE_CHARACTERS},${LATIN_ALPHABET}`;
    this.config.x = x;
    this.config.y = y;
    this.config.fontSize = fontSize;
    this.config.text = "";
    this.config.canvasHeight = canvasHeight;
  }

  draw(context: CanvasRenderingContext2D) {
    if (!this.config.characters) return;

    this.config.text = this.config.characters.charAt(
      Math.floor(Math.random() * this.config.characters.length)
    );
    context.fillStyle = "#0aff0a";
    context.fillText(
      this.config.text,
      this.config.x * this.config.fontSize,
      this.config.y * this.config.fontSize
    );
    if (
      this.config.y * this.config.fontSize > this.config.canvasHeight &&
      Math.random() > 0.97
    ) {
      this.config.y = 0;
    } else {
      this.config.y += 1;
    }
  }
}

const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const CHINESE_CHARACTERS = `你好我爱中国学习大家上下左右开关朋友时间年月日星期一二三四五六七八九十百千万零`;
