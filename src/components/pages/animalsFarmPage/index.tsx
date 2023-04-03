import { AnimalsFarm } from "../../../database";
import { EmojiPageTemplate } from "../../templates/emojiPageTemplate";

export const AnimalsFarmPage = (): JSX.Element => {
  return <EmojiPageTemplate cards={AnimalsFarm} />;
};
