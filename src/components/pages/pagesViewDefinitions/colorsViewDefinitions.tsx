import { ViewDefinition } from "../../../models";
import { PaletteColorsPage } from "../colorsPalettePage";
import { RainbowColorsPage } from "../colorsRainbowPage";

export const colorViewDefinitions: ViewDefinition[] = [
  {
    name: "Rainbow",
    urlName: "rainbow",
    description: "rainbow colors cards",
    element: <RainbowColorsPage />,
  },

  {
    name: "Palette",
    urlName: "art-palette",
    description: "more colors from painting palette",
    element: <PaletteColorsPage />,
  },
];
