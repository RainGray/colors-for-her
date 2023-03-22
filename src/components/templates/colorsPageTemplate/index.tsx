import React from "react";
import { ColorCardsRowsSet } from "../..";
import { CardColor } from "../../../models";

export function ColorsPageTemplate(props: { cards: CardColor[] }) {
  const cardCols = 5;

  return (
    <React.Fragment>
      <div className="column">
        <p> The Color </p>
        <div className="column">
          {/* <CardGrid cards={props.cards} /> */}
          <ColorCardsRowsSet cards={props.cards} cardsPerRow={4} />
        </div>
      </div>
    </React.Fragment>
  );
}
