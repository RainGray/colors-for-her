import { osList } from "../../../../database";
import { LanguageData } from "../../../../models";
import { getOperatingSystem } from "../../../../utils";
import { SvgFlag } from "../svgFlags";

export function FlagImage(props: { language: LanguageData }): JSX.Element {
  let doesSupportingEmoji = false;
  const os = getOperatingSystem();
  switch (os) {
    case osList.ios:
      doesSupportingEmoji = true;
      break;
    case osList.macos:
      doesSupportingEmoji = true;
      break;
    default:
      doesSupportingEmoji = false;
  }

  return doesSupportingEmoji ? (
    <span> {props.language.flag} </span>
  ) : (
    <SvgFlag langForFlag={props.language} />
  );
}
