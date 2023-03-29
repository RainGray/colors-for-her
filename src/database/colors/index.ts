import { CardColor } from "../../models";
import { Language } from "../../models";

export const MyCardColor: CardColor[] = [
  {
    name: "red",
    color: { core: "#FF0000", border: "#990000" },
    text: { [Language.eng]: "Red", [Language.rus]: "Красный", [Language.ukr]: "Червоний" },
  },
  {
    name: "orange",
    color: { core: "#ff3300", border: "#ff6600" },
    text: { [Language.eng]: "Orange", [Language.rus]: "Оранжевый", [Language.ukr]: "Помаранчевий" },
  },
  {
    name: "yellow",
    color: { core: "#ffff99", border: "#ffff00" },
    text: { [Language.eng]: "Yellow", [Language.rus]: "Желтый", [Language.ukr]: "Жовтий" },
  },
  {
    name: "green",
    color: { core: "#66ff66", border: "#00ff00" },
    text: { [Language.eng]: "Green", [Language.rus]: "Зеленый", [Language.ukr]: "Зелений" },
  },
  {
    name: "blue",
    color: { core: "#ccffff", border: "#66ccff" },
    text: { [Language.eng]: "Blue", [Language.rus]: "Голубой", [Language.ukr]: "Блакитний" },
  },
  {
    name: "navy blue",
    color: { core: "#6699ff", border: "#0066ff" },
    text: { [Language.eng]: "Navy Blue", [Language.rus]: "Синий", [Language.ukr]: "Синій" },
  },
  {
    name: "purple",
    color: { core: "#9966ff", border: "#6600cc" },
    text: { [Language.eng]: "Purple", [Language.rus]: "Фиолетовый", [Language.ukr]: "Фіолетовий" },
  },
];
