import { Language, ScreenSize } from "../../models";

export interface AppContextState {
  screen: ScreenState;
  language: LanguageState;
  languageSwitcher: LanguageSwitcherState;
}

export interface ScreenState {
  screenWidth: number;
  screenSize: ScreenSize;
}

export interface LanguageSwitcherState {
  primaryLanguageSwitcher: () => void;
  secondaryLanguageSwitcher: () => void;
}

export interface LanguageState {
  primaryLanguage: Language;
  secondaryLanguage: Language;
}
