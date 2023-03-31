import { Language, LanguageEnum } from "../../models";

export const SupportedLanguages: Language[] = [
  {
    str: LanguageEnum.eng,
    flag: "🇬🇧",
    isoCode: 'gb',
  },
  {
    str: LanguageEnum.rus,
    flag: "🇷🇺",
    isoCode: 'ru',
  },
  {
    str: LanguageEnum.ukr,
    flag: "🇺🇦",
    isoCode: 'ua',
  },
];
