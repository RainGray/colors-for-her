import { HomeArticleIntro, HomeArticleLangSwitch } from "../../../database/pageText";
import { useAppContext } from "../../../support/context/appContextProvider";
import { LocalizedText } from "../../templates";
import { VerticalDividerContainer } from "../../features";
import "./style.css";

export const HomePage = (): JSX.Element => {
  const app = useAppContext();

  const PrimLangIntro: JSX.Element = (
    <div className="article-column article-column-left">
        <LocalizedText
          article={HomeArticleIntro}
          language={app.language.primaryLanguage}
          key={"primaryLanguageHelloArticle"}
        />
    </div>
  )
  const SecLangIntro: JSX.Element = (
    <div className="article-column article-column-right">
        <LocalizedText
          article={HomeArticleIntro}
          language={app.language.secondaryLanguage}
          key={"secondaryLanguageHelloArticle"}
        />
    </div>
  )
  
  const PrimLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-left">
        <LocalizedText
          article={HomeArticleLangSwitch}
          language={app.language.primaryLanguage}
          key={"primaryLanguageFlagButtonArticle"}
        />
    </div>
  )
  const SecLangFlagButtons: JSX.Element = (
    <div className="article-column article-column-right">
        <LocalizedText
          article={HomeArticleLangSwitch}
          language={app.language.secondaryLanguage}
          key={"secondaryLanguageFlagButtonArticle"}
        />
    </div>
  )

  return (
    <div className="home-page-content" >
       <VerticalDividerContainer leftOption={PrimLangIntro} rightOption={SecLangIntro}/>
       <VerticalDividerContainer leftOption={PrimLangFlagButtons} rightOption={SecLangFlagButtons}/>
       
    </div>
  )
};
