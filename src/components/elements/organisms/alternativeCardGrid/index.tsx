import { CardColor } from "../../../../models";
import { ColorCard } from "../../molecules";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridGap: "20px",
};

export function CardGrid(props: { cards: CardColor[] }) {
  const theCards = props.cards;
  return (
    <div style={gridStyle}>
      {theCards.map((card, index) => (
        <ColorCard card={card} key={index} />
      ))}
    </div>
  );
}
