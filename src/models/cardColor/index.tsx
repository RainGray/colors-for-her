import { RadialGradientColor } from "../colorRadialGradient";
import { LanguageData, Words } from "../language";

export interface CardColor {
  name: string;
  color: RadialGradientColor;
  text: Words;
}
