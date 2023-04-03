import { CardEmoji } from "../../../../models";
import { EmojiCard } from "../../molecules";

export function EmojiCardRow(props: { cardSet: CardEmoji[] }): JSX.Element {
  return (
    <div className="row">
      {props.cardSet.map((theCard) => (
        <EmojiCard key={theCard.name} card={theCard} />
      ))}
    </div>
  );
}
