import { ColorsPage } from "./colorsPage";

const Colors = () => (
  <div>
    <h1> Colors </h1>
  </div>
);
const Animals = () => (
  <div>
    <h1> Animals </h1>
  </div>
);

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
    element: <Colors />,
  },

  {
    name: "Colors",
    urlName: "card-colors",
    description: "there is some cards to learn colors",
    element: <ColorsPage />,
  },
];
