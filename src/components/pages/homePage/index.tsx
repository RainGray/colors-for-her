import {
  // HomeArticleIntro,
  // HomeArticleLangSwitch,
  testArticle,
} from "../../../database/pageText";
import { useAppContext } from "../../../support/context/appContextProvider";
import { LocalizedText } from "../../templates";
import { VerticalDividerContainer } from "../../features";
import "./style.css";

export const HomePage = (): JSX.Element => {
  const app = useAppContext();

  const PrimLangIntro: JSX.Element = (
    <div className="article-column article-column-left">
      {/* <LocalizedText
        article={testArticle}
        language={app.language.primaryLanguage}
        key={"primaryLanguageHelloArticle"}
      /> */}
      test test test
    </div>
  );
  const SecLangIntro: JSX.Element = (
    <div className="article-column article-column-right">
      {/* <LocalizedText
        article={testArticle}
        language={app.language.secondaryLanguage}
        key={"secondaryLanguageHelloArticle"}
      /> */}
      test test test
    </div>
  );

  const PrimLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-left">
      {/* <LocalizedText
        article={testArticle}
        language={app.language.primaryLanguage}
        key={"primaryLanguageFlagButtonArticle"}
      /> */}
      test test test
    </div>
  );
  const SecLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-right">
      {/* <LocalizedText
        article={testArticle}
        language={app.language.secondaryLanguage}
        key={"secondaryLanguageFlagButtonArticle"}
      /> */}
      test test test
    </div>
  );

  return (
    <div className="home-page-content">
      <VerticalDividerContainer
        leftOption={PrimLangIntro}
        rightOption={SecLangIntro}
      />
      <VerticalDividerContainer
        leftOption={PrimLangFlagButtons}
        rightOption={SecLangFlagButtons}
      />
    </div>
  );
};
