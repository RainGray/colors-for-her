import { ViewDefinition } from "../../../models";
import { AnimalsFarmPage } from "../animalsFarmPage";
import { AnimalsPetsPage } from "../animalsPetsPage";

export const animalsViewDefinitions: ViewDefinition[] = [
  {
    name: "Pets",
    urlName: "pets-animals",
    description: "you can meet them at home!",
    element: <AnimalsPetsPage />,
  },

  {
    name: "Farm",
    urlName: "farm-animals",
    description: "you can meet them at farm!",
    element: <AnimalsFarmPage />,
  },
];
