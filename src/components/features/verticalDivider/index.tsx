import "./style.css";

export function VerticalDividerContainer(props: {
  leftOption: JSX.Element;
  rightOption: JSX.Element;
  middleElement?: JSX.Element;
}): JSX.Element {
  return (
    <div className="divider-body">
      <div className="row" style={{ alignItems: "start" }}>
        <div className="side-element side-element-left">{props.leftOption}</div>
        <div className="middle-element">{props.middleElement}</div>
        <div className="side-element side-element-right">
          {props.rightOption}
        </div>
      </div>
    </div>
  );
}
