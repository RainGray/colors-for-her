import { RadialGradientColor } from "../colorRadialGradient";
import { Language, Words } from "../language";

export interface CardColor {
  name: string;
  color: RadialGradientColor;
  text: Words;
}
