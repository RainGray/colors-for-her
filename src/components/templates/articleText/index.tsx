import { Language, PageText } from "../../../models";

export function LocalizedText(props: {
  article: PageText;
  language: Language;
}): JSX.Element {
  return (
    <div key={props.article.title}>
      {props.article.text[props.language.str]}
    </div>
  );
}
