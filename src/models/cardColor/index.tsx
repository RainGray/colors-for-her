import { RadialGradientColor } from "../colorRadialGradient";

interface Word {
  eng: string;
  rus: string;
  ukr: string;
}

export interface CardColor {
  name: string;
  color: RadialGradientColor;
  text: Word;
}
