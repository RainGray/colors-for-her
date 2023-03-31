import { Language } from "../../../../models";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export function SvgFlag(props: {langForFlag: Language}): JSX.Element {
    let flag = 'fi fi-' + props.langForFlag.isoCode;
    return (
        <span className={flag}></span>
    )
}