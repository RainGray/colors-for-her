import { Language, PageText } from "../../../models";

export function LocalizedText(props: {
  article: PageText;
  language: Language;
}): JSX.Element {
  return props.article.text[props.language.str];
}
