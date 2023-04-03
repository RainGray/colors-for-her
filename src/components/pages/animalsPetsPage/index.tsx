import { AnimalsPets } from "../../../database";
import { EmojiPageTemplate } from "../../templates/emojiPageTemplate";

export const AnimalsPetsPage = (): JSX.Element => {
  return <EmojiPageTemplate cards={AnimalsPets} />;
};
