import { Language, LanguageEnum } from "../../models";

export function parseLangFromLocalStorage(languageSlot: string): Language {
  try {
    const lang = JSON.parse(localStorage.getItem(languageSlot) || "");
    return lang;
  } catch {
    return { str: LanguageEnum.eng, flag: "🇬🇧" };
  }
}
