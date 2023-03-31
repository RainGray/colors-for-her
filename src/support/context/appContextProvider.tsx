import React, {
  useContext,
  useState,
  createContext,
  useEffect,
  PropsWithChildren,
} from "react";
import { BrowserRouterProps } from "react-router-dom";
import { ContextData, Language, LanguageEnum } from "../../models";
import {
  nextItemAfterXExceptY,
  parseLangFromLocalStorage,
  screenSizeFunction,
} from "../../utils";
import {
  AppContextState,
  LanguageSwitcherState,
  ScreenState,
  LanguageState,
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
    primaryLanguage: parseLangFromLocalStorage("primaryLanguage"),
    secondaryLanguage: parseLangFromLocalStorage("secondaryLanguage"),
  } as LanguageState,
  languageSwitcher: {
    primaryLanguageSwitcher: placeholder,
    secondaryLanguageSwitcher: placeholder,
  } as LanguageSwitcherState,
});

const ContextProvider = ({
  children,
}: PropsWithChildren<BrowserRouterProps>) => {
  const [primaryLanguage, setPrimaryLanguage] = useState<Language>(
    parseLangFromLocalStorage("primaryLanguage")
  );
  const [secondaryLanguage, setSecondaryLanguage] = useState<Language>(
    parseLangFromLocalStorage("secondaryLanguage")
  );

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

  useEffect(() => {
    localStorage.setItem("primaryLanguage", JSON.stringify(primaryLanguage));
  }, [primaryLanguage]);

  useEffect(() => {
    localStorage.setItem(
      "secondaryLanguage",
      JSON.stringify(secondaryLanguage)
    );
  }, [secondaryLanguage]);

  useEffect(() => {
    setPrimaryLanguage(parseLangFromLocalStorage("primaryLanguage"));
    setSecondaryLanguage(parseLangFromLocalStorage("secondaryLanguage"));
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
