import "./style.css";
import { CardColor, RadialGradientColor } from "../../../../models";
import { LanguageEnum } from "../../../../models";
import { useAppContext } from "../../../../support/context/appContextProvider";

export function ColorCard(props: { card: CardColor }): JSX.Element {
  const { color, text } = props.card;

  const app = useAppContext();
  const primaryLanguage = app.language.primaryLanguage.str;
  const secondaryLanguage = app.language.secondaryLanguage.str;

  return (
    <div className="card">
      <div
        className="circle"
        style={{
          background: `radial-gradient(${color.core}, ${color.border})`,
        }}
      ></div>

      <div
        className="circle"
        style={{
          background: `radial-gradient(${color.core}, ${color.border})`,
        }}
      ></div>

      <div className="row" style={{ width: "100%", height: "100%" }}>
        <div className="column">
          <p className="card-text">
            {text[primaryLanguage][0]} - {text[primaryLanguage]}
          </p>
          <p className="card-text">
            {text[secondaryLanguage][0]} - {text[secondaryLanguage]}
          </p>
        </div>
      </div>
      <div className="card-inner"></div>
    </div>
  );
}
