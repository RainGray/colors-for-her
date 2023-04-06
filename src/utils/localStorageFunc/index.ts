import { LanguageData, LanguageEnum } from "../../models";

export function parseLangFromLocalStorage(languageSlot: string): LanguageData {
  try {
    const lang = JSON.parse(localStorage.getItem(languageSlot) || "");
    return lang;
  } catch {
    return { enumCode: LanguageEnum.eng, flag: "🇬🇧", isoCode: "GB" };
  }
}
