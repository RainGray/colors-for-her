import React from "react";
import { CardEmoji } from "../../../models";
import { EmojiCardRow } from "../../elements/organisms";

function makeABatch(deck: CardEmoji[], batchSize: number) {
  const batch: CardEmoji[] = [];
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

function createNewDeck(deck: CardEmoji[], newCards: CardEmoji[]) {
  deck.splice(0);
  deck.push(...newCards);
}

export function EmojiCardsRowsSet(props: {
  cards: CardEmoji[];
  cardsPerRow: number;
}) {
  const theCards = props.cards || [];
  const theCPR = props.cardsPerRow || 1;
  const deck: CardEmoji[] = [];
  var result: any[] = [];

  createNewDeck(deck, theCards);
  while (deck.length > 0) {
    result.push(makeABatch(deck, theCPR));
  }

  return (
    <>
      {result.map((nextBatch, index) => (
        <EmojiCardRow cardSet={nextBatch} key={index} />
      ))}
    </>
  );
}
