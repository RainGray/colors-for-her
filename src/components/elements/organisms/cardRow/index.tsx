import { CardColor } from "../../../../models";
import { ColorCard } from "../../molecules";

export function ColorCardRow(props: { cardSet: CardColor[] }): JSX.Element {
  return (
    <div className="row">
      {props.cardSet.map((theCard) => (
        <ColorCard key={theCard.name} card={theCard} />
      ))}
    </div>
  );
}
