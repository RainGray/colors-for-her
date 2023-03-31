import { useEffect, useState } from "react";
import { osList } from "../../../../database";
import { Language, LanguageEnum, ScreenSize } from "../../../../models";
import { useAppContext } from "../../../../support/context/appContextProvider";
import { getOperatingSystem } from "../../../../utils";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { SvgFlag } from "../svgFlags";

export function NationalFlagButton(props: {
  language: Language;
  switcherFunction: () => void;
}): JSX.Element {
  const app = useAppContext();
  let responsiveFontSize = 5;
  switch (app.screen.screenSize) {
    case ScreenSize.l:
      responsiveFontSize = 20;
      break;
    case ScreenSize.xl:
      responsiveFontSize = 20;
      break;
    case ScreenSize.m:
      responsiveFontSize = 20;
      break;
    case ScreenSize.s:
      responsiveFontSize = 25;
      break;
    case ScreenSize.xs:
      responsiveFontSize = 25;
      break;
    default:
      responsiveFontSize = 25;
      break;
  }

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

  return (
    <div
      className="flagButton"
      onClick={props.switcherFunction}
      style={{
        padding: 5,
        cursor: "pointer",
        fontSize: responsiveFontSize,
      }}
    >
      {doesSupportingEmoji ? props.language.flag : <SvgFlag langForFlag={props.language}/>}
    </div>

  );
}
