import { LanguageData, ScreenSize } from "../../models";

export interface AppContextState {
  screen: ScreenState;
  language: LanguageState;
  languageSwitcher: LanguageSwitcherState;
  homePageData: HomePageState;
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
  primaryLanguage: LanguageData;
  secondaryLanguage: LanguageData;
}

export interface HomePageState {
  headerPronoun: string;
  changeTitle: (pronoun: string) => void;
}
