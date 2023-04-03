import { PaletteColorsPage } from "../colorsPalettePage";
import { RainbowColorsPage } from "../colorsRainbowPage";

export const colorViewDefinitions: {
  name: string;
  urlName: string;
  description: string;
  // icon: JSX.Element;
  element: React.ReactNode;
}[] = [
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
