import { useAppContext } from "../../../../support/context/appContextProvider";
import { NationalFlagButton } from "../../atoms";

export function LanguageSwitcher(): JSX.Element {
  let and = " & ";

  function consoleInfo(langSlot: string): void {
    console.log(`We a triggering ${langSlot} language slot`);
  }

  const app = useAppContext();

  return (
    <div
      className="row"
      style={{
        borderStyle: "solid",
        borderRadius: 10,
        borderWidth: 1,
        padding: 0,
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
