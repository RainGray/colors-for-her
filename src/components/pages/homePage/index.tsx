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

  if (app.screen.isMobile) {
    return (
      <div className="home-page-content" style={{ padding: "0px 20px" }}>
        <HelloText />
        {HomeArticleIntro(app.language.primaryLanguage)}
        {LangEmoji}
        {HomeArticleLangSwitch(app.language.primaryLanguage)}
        <PronounButtons />
        {HomeArticleAppName(app.language.primaryLanguage)}
      </div>
    );
  } else {
    return (
      <div className="home-page-content">
        <VerticalDividerContainer
          leftOption={HomeArticleIntro(app.language.primaryLanguage)}
          rightOption={HomeArticleIntro(app.language.secondaryLanguage)}
          middleElement={HelloText()}
        />
        <VerticalDividerContainer
          leftOption={HomeArticleLangSwitch(app.language.primaryLanguage)}
          rightOption={HomeArticleLangSwitch(app.language.secondaryLanguage)}
          middleElement={LangEmoji}
        />
        <VerticalDividerContainer
          leftOption={HomeArticleAppName(app.language.primaryLanguage)}
          rightOption={HomeArticleAppName(app.language.secondaryLanguage)}
          middleElement={PronounButtons()}
        />
      </div>
    );
  }
};
