import './style.css'

export function VerticalDividerContainer(props: {leftOption: JSX.Element, rightOption: JSX.Element}): JSX.Element {

  return (
    <div className="divider-body">
      <div className="row">
        {props.leftOption}
        <div className="text">Text text .</div>
        {props.rightOption}
      </div> 
    </div>  

  )
}

