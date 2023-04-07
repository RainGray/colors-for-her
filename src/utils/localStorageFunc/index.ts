import { LanguageData, LanguageEnum } from "../../models";

export function parseLangFromLocalStorage(
  languageSlot: string,
  defaultIsEng: boolean
): LanguageData {
  try {
    const lang = JSON.parse(localStorage.getItem(languageSlot) || "");
    return lang;
  } catch {
    return defaultIsEng
      ? { enumCode: LanguageEnum.eng, flag: "🇬🇧", isoCode: "gb" }
      : { enumCode: LanguageEnum.rus, flag: "🇷🇺", isoCode: "ru" };
  }
}
export function parsePronounFromLocalStorage(): string {
  try {
    const pronoun = JSON.parse(localStorage.getItem("pronoun") || "");
    return pronoun;
  } catch {
    return "Her";
  }
}
