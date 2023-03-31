import { CardColor } from "../../models";
import { LanguageEnum } from "../../models";

export const MyCardColor: CardColor[] = [
  {
    name: "red",
    color: { core: "#FF0000", border: "#990000" },
    text: {
      [LanguageEnum.eng]: "Red",
      [LanguageEnum.rus]: "Красный",
      [LanguageEnum.ukr]: "Червоний",
    },
  },
  {
    name: "orange",
    color: { core: "#ff3300", border: "#ff6600" },
    text: {
      [LanguageEnum.eng]: "Orange",
      [LanguageEnum.rus]: "Оранжевый",
      [LanguageEnum.ukr]: "Помаранчевий",
    },
  },
  {
    name: "yellow",
    color: { core: "#ffff99", border: "#ffff00" },
    text: {
      [LanguageEnum.eng]: "Yellow",
      [LanguageEnum.rus]: "Желтый",
      [LanguageEnum.ukr]: "Жовтий",
    },
  },
  {
    name: "green",
    color: { core: "#66ff66", border: "#00ff00" },
    text: {
      [LanguageEnum.eng]: "Green",
      [LanguageEnum.rus]: "Зеленый",
      [LanguageEnum.ukr]: "Зелений",
    },
  },
  {
    name: "blue",
    color: { core: "#ccffff", border: "#66ccff" },
    text: {
      [LanguageEnum.eng]: "Blue",
      [LanguageEnum.rus]: "Голубой",
      [LanguageEnum.ukr]: "Блакитний",
    },
  },
  {
    name: "navy blue",
    color: { core: "#6699ff", border: "#0066ff" },
    text: {
      [LanguageEnum.eng]: "Navy Blue",
      [LanguageEnum.rus]: "Синий",
      [LanguageEnum.ukr]: "Синій",
    },
  },
  {
    name: "purple",
    color: { core: "#9966ff", border: "#6600cc" },
    text: {
      [LanguageEnum.eng]: "Purple",
      [LanguageEnum.rus]: "Фиолетовый",
      [LanguageEnum.ukr]: "Фіолетовий",
    },
  },
];
