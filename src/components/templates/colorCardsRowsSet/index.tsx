import React from "react";
import { CardColor } from "../../../models";
import { ColorCardRow } from "../../elements/organisms";

function makeABatch(deck: CardColor[], batchSize: number) {
  const batch: CardColor[] = [];
  for (let index = 0; index < batchSize; index++) {
    if (deck.length > 0) {
      batch.push(deck[0]);
      deck.splice(0, 1);
    } else {
      break;
    }
  }
  return batch;
}

function createNewDeck(deck: CardColor[], newCards: CardColor[]) {
  deck.splice(0);
  deck.push(...newCards);
}

export function ColorCardsRowsSet(props: {
  cards: CardColor[];
  cardsPerRow: number;
}) {
  const theCards = props.cards || [];
  const theCPR = props.cardsPerRow || 1;
  const deck: CardColor[] = [];
  var result: any[] = [];

  createNewDeck(deck, theCards);
  while (deck.length > 0) {
    result.push(makeABatch(deck, theCPR));
  }

  return (
    <>
      {result.map((nextBatch, index) => (
        <ColorCardRow cardSet={nextBatch} key={index} />
      ))}
    </>
  );
}
