import "./style.css";
import { CardEmoji } from "../../../../models";
import { useAppContext } from "../../../../support/context/appContextProvider";

export function EmojiCard(props: { card: CardEmoji }): JSX.Element {
  const { emoji, text } = props.card;

  const app = useAppContext();
  const primaryLanguage = app.language.primaryLanguage.str;
  const secondaryLanguage = app.language.secondaryLanguage.str;

  return (
    <div className="card">
      <div className="column" style={{ width: "100%", height: "100%" }}>
        <p className="card-text">
          {text[primaryLanguage][0]} - {text[primaryLanguage]}
        </p>
        <p
          className="card-text"
          style={{ fontSize: 62, padding: 0, margin: 0 }}
        >
          {emoji}
        </p>
        <p className="card-text">
          {text[secondaryLanguage][0]} - {text[secondaryLanguage]}
        </p>
      </div>

      <div className="card-inner"></div>
    </div>
  );
}
