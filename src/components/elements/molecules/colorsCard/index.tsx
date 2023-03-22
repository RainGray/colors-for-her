import "./style.css";
import { CardColor, RadialGradientColor } from "../../../../models";

export function ColorCard(props: { card: CardColor }): JSX.Element {
  const { color, text } = props.card;
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
            {text.eng[0]} - {text.eng}
          </p>
          <p className="card-text">
            {text.rus[0]} - {text.rus}
          </p>
        </div>
      </div>
      <div className="card-inner"></div>
    </div>
  );
}
