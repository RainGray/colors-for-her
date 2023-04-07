import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
} from "react";
import { BrowserRouterProps } from "react-router-dom";
import { ContextData, LanguageData, LanguageEnum } from "../../models";
import {
  nextItemAfterXExceptY,
  parseLangFromLocalStorage,
  parsePronounFromLocalStorage,
  screenSizeFunction,
} from "../../utils";
import {
  AppContextState,
  LanguageSwitcherState,
  ScreenState,
  LanguageState,
  HomePageState,
} from "./appContext.state";
import { SupportedLanguages } from "../../database";

function placeholder() {
  console.log("placeholder func has been called");
}

const AppContext = createContext<AppContextState>({
  screen: {
    screenWidth: 0,
    screenSize: screenSizeFunction(0),
  } as ScreenState,
  language: {
    primaryLanguage: parseLangFromLocalStorage("primaryLanguage", true),
    secondaryLanguage: parseLangFromLocalStorage("secondaryLanguage", false),
  } as LanguageState,
  languageSwitcher: {
    primaryLanguageSwitcher: placeholder,
    secondaryLanguageSwitcher: placeholder,
  } as LanguageSwitcherState,
  homePageData: {
    headerPronoun: parsePronounFromLocalStorage(),
    changeTitle: placeholder,
  } as HomePageState,
});

const ContextProvider = ({
  children,
}: PropsWithChildren<BrowserRouterProps>) => {
  const [primaryLanguage, setPrimaryLanguage] = useState<LanguageData>(
    parseLangFromLocalStorage("primaryLanguage", true)
  );
  const [secondaryLanguage, setSecondaryLanguage] = useState<LanguageData>(
    parseLangFromLocalStorage("secondaryLanguage", false)
  );

  const [pronoun, setPronoun] = useState(parsePronounFromLocalStorage());

  function primaryLanguageSwitcherFunc() {
    setPrimaryLanguage(
      nextItemAfterXExceptY(
        SupportedLanguages,
        primaryLanguage,
        secondaryLanguage
      )
    );
  }

  function secondaryLanguageSwitcherFunc() {
    setSecondaryLanguage(
      nextItemAfterXExceptY(
        SupportedLanguages,
        secondaryLanguage,
        primaryLanguage
      )
    );
  }

  function changePronoun(newPronoun: string) {
    setPronoun(newPronoun);
  }

  useEffect(() => {
    localStorage.setItem("primaryLanguage", JSON.stringify(primaryLanguage));
  }, [primaryLanguage]);

  useEffect(() => {
    localStorage.setItem("pronoun", JSON.stringify(pronoun));
  }, [pronoun]);

  useEffect(() => {
    localStorage.setItem(
      "secondaryLanguage",
      JSON.stringify(secondaryLanguage)
    );
  }, [secondaryLanguage]);

  useEffect(() => {
    setPrimaryLanguage(parseLangFromLocalStorage("primaryLanguage", true));
    setSecondaryLanguage(parseLangFromLocalStorage("secondaryLanguage", false));
  }, []);

  const [width, setWindowWidth] = useState(0);

  const context: AppContextState = {
    screen: {
      screenSize: screenSizeFunction(width),
      screenWidth: width,
    },
    language: {
      primaryLanguage: primaryLanguage,
      secondaryLanguage: secondaryLanguage,
    },
    languageSwitcher: {
      primaryLanguageSwitcher: primaryLanguageSwitcherFunc,
      secondaryLanguageSwitcher: secondaryLanguageSwitcherFunc,
    },
    homePageData: {
      headerPronoun: pronoun,
      changeTitle: changePronoun,
    },
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default ContextProvider;
