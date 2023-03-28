import { AnimalsPage } from "./animalsPage";
import { ColorsPage } from "./colorsPage";

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
    element: <AnimalsPage />,
  },

  {
    name: "Colors",
    urlName: "card-colors",
    description: "there is some cards to learn colors",
    element: <ColorsPage />,
  },
];
