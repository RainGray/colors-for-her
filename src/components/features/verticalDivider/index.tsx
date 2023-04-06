import "./style.css";

export function VerticalDividerContainer(props: {
  leftOption: JSX.Element;
  rightOption: JSX.Element;
  middleElement?: JSX.Element;
}): JSX.Element {
  return (
    <div className="divider-body">
      <div className="row" style={{ alignItems: "start" }}>
        {props.leftOption}
        <div className="middle-element">{props.middleElement}</div>
        {props.rightOption}
      </div>
    </div>
  );
}
