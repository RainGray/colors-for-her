import { useAppContext } from "../../../../support/context/appContextProvider";
import { NationalFlagButton } from "../nationalFlagButton";

export function LanguageSwitcher(): JSX.Element {
  let and = " & ";

  const app = useAppContext();

  const borderWidth = app.screen.isMobile ? 0 : 1;

  return (
    <div
      className="row"
      style={{
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: borderWidth,
        padding: 0,
        margin: "1px 20px",
        height: "auto",
      }}
    >
      <NationalFlagButton
        language={app.language.primaryLanguage}
        switcherFunction={app.languageSwitcher.primaryLanguageSwitcher}
        key={"1"}
      />
      {and}
      <NationalFlagButton
        language={app.language.secondaryLanguage}
        switcherFunction={app.languageSwitcher.secondaryLanguageSwitcher}
        key={"2"}
      />
    </div>
  );
}
