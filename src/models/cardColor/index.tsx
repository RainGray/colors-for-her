import { RadialGradientColor } from "../colorRadialGradient";
import { Language } from "../language";

type Word = {
  [key in Language]: string;
}

export interface CardColor {
  name: string;
  color: RadialGradientColor;
  text: Word;
}
