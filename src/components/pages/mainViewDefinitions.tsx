import { AnimalsPetsPage } from "./animalsPetsPage";
import { RainbowColorsPage } from "./colorsRainbowPage";

export const mainViewDefinitions: {
  name: string;
  urlName: string;
  description: string;
  // icon: JSX.Element;
  element: React.ReactNode;
}[] = [
  {
    name: "Animals",
    urlName: "card-animals",
    description: "there is some cards to learn animals",
    element: <AnimalsPetsPage />,
  },

  {
    name: "Colors",
    urlName: "card-colors",
    description: "there is some cards to learn colors",
    element: <RainbowColorsPage />,
  },
];
