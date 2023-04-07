import { useAppContext } from "../../../../../support/context/appContextProvider";

function PronounBtn(props: { pronoun: string; emoji: string }): JSX.Element {
  const app = useAppContext();
  const handleClick = () => app.homePageData.changeTitle(props.pronoun);
  const fontSize = app.homePageData.headerPronoun === props.pronoun ? 52 : 32;

  return (
    <div
      style={{
        cursor: "pointer",
        margin: "0px",
        padding: "20px 0px",
        fontSize: fontSize,
      }}
      onClick={handleClick}
    >
      {props.emoji}
    </div>
  );
}

export function PronounButtons(): JSX.Element {
  return (
    <div className="row">
      <PronounBtn pronoun="Her" emoji="👧" />
      <PronounBtn pronoun="Them" emoji="👨‍👩‍👧‍👦" />
      <PronounBtn pronoun="Him" emoji="🧒" />
    </div>
  );
}
