import React from "react";
import { EmojiCardsRowsSet } from "../..";
import { CardEmoji } from "../../../models";
import { useAppContext } from "../../../support/context/appContextProvider";

export function EmojiPageTemplate(props: { cards: CardEmoji[] }) {
  const app = useAppContext();

  return (
    <div className="column">
      {/* <CardGrid cards={props.cards} /> */}
      <EmojiCardsRowsSet
        cards={props.cards}
        cardsPerRow={app.screen.screenSize + 1}
      />
    </div>
  );
}
