import { HomeArticle } from "../../../database/pageText";
import { useAppContext } from "../../../support/context/appContextProvider";
import { LocalizedText } from "../../templates";
import { VerticalDivider } from "../../features";
import "./style.css";

export const HomePage = (): JSX.Element => {
  const app = useAppContext();

  return (
    <div className="row" style={{ alignItems: "start" }}>
      <div
        className="column"
        style={{
          minWidth: "20%",
          maxWidth: "400px",
          textAlign: "right",
          padding: 10,
        }}
      >
        <LocalizedText
          article={HomeArticle}
          language={app.language.primaryLanguage}
          key={"primaryLanguageArticle"}
        />
      </div>
      {/* <VerticalDivider /> */}
      <div className="spacer-vertical left"></div>
      <div
        className="column"
        style={{
          minWidth: "20%",
          maxWidth: "400px",
          textAlign: "left",
          padding: 10,
        }}
      >
        <LocalizedText
          article={HomeArticle}
          language={app.language.secondaryLanguage}
          key={"secondaryLanguageArticle"}
        />
      </div>
    </div>
  );
};
