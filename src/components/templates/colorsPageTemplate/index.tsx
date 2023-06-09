import React from "react";
import { ColorCardsRowsSet } from "../..";
import { CardColor } from "../../../models";
import { useAppContext } from "../../../support/context/appContextProvider";

export function ColorsPageTemplate(props: { cards: CardColor[] }) {
  const app = useAppContext();

  return (
    <div className="column">
      {/* <CardGrid cards={props.cards} /> */}
      <ColorCardsRowsSet
        cards={props.cards}
        cardsPerRow={app.screen.screenSize + 1}
      />
    </div>
  );
}
