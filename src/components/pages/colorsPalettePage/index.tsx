import { ColorsPageTemplate } from "../../templates";
import { PaletteCardColor } from "../../../database";

export const PaletteColorsPage = (): JSX.Element => {
  return <ColorsPageTemplate cards={PaletteCardColor} />;
};
