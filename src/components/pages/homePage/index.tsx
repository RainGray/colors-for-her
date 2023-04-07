import {
  HomeArticleIntro,
  HomeArticleLangSwitch,
  HomeArticleAppName,
} from "../../../database";
import { useAppContext } from "../../../support/context/appContextProvider";
import { VerticalDividerContainer, HelloText, LangEmoji } from "../../features";
import { PronounButtons } from "../../features/verticalDivider/middleElements/pronounButtons";
import "./style.css";

export const HomePage = (): JSX.Element => {
  const app = useAppContext();

  const PrimLangIntro: JSX.Element = (
    <div className="article-column article-column-left">
      {HomeArticleIntro(app.language.primaryLanguage)}
    </div>
  );
  const SecLangIntro: JSX.Element = (
    <div className="article-column article-column-right">
      {HomeArticleIntro(app.language.secondaryLanguage)}
    </div>
  );

  const PrimLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-left">
      {HomeArticleLangSwitch(app.language.primaryLanguage)}
    </div>
  );
  const SecLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-right">
      {HomeArticleLangSwitch(app.language.secondaryLanguage)}
    </div>
  );

  const PrimLangAppName: JSX.Element = (
    <div className="article-column article-column-left">
      {HomeArticleAppName(app.language.primaryLanguage)}
    </div>
  );
  const SecLangAppName: JSX.Element = (
    <div className="article-column article-column-right">
      {HomeArticleAppName(app.language.secondaryLanguage)}
    </div>
  );

  return (
    <div className="home-page-content">
      <VerticalDividerContainer
        leftOption={PrimLangIntro}
        rightOption={SecLangIntro}
        middleElement={HelloText()}
      />
      <VerticalDividerContainer
        leftOption={PrimLangFlagButtons}
        rightOption={SecLangFlagButtons}
        middleElement={LangEmoji}
      />
      <VerticalDividerContainer
        leftOption={PrimLangAppName}
        rightOption={SecLangAppName}
        middleElement={PronounButtons()}
      />
    </div>
  );
};
