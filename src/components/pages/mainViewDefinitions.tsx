import { ViewDefinition } from "../../models";
import { AnimalsPetsPage } from "./animalsPetsPage";
import { RainbowColorsPage } from "./colorsRainbowPage";
import { animalsViewDefinitions } from "./pagesViewDefinitions/animalsViewDefinitions";
import { colorViewDefinitions } from "./pagesViewDefinitions/colorsViewDefinitions";

export const mainViewDefinitions: ViewDefinition[] = [
  {
    name: "Animals",
    urlName: "card-animals",
    description: "there is some cards to learn animals",
    element: <AnimalsPetsPage />,
    childMenu: animalsViewDefinitions,
  },

  {
    name: "Colors",
    urlName: "card-colors",
    description: "there is some cards to learn colors",
    element: <RainbowColorsPage />,
    childMenu: colorViewDefinitions,
  },
];
