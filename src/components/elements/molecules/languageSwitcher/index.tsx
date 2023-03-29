import { NationalFlagButton } from "../../atoms";

export function LanguageSwitcher(): JSX.Element {
    
    return (
    <div className="row" style={{borderStyle: "solid", borderRadius: 10, borderWidth: 1, padding: 4}}>
        <NationalFlagButton languageSlot="LanguagePrimary" key={'1'} />
        <NationalFlagButton languageSlot="LanguageSecondary" key={'2'}/>
    </div>
    )}