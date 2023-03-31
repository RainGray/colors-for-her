import { useEffect, useState } from "react";
import { Language, LanguageEnum } from "../../../../models";

export function NationalFlagButton(props: {
  language: Language;
  switcherFunction: () => void;
}): JSX.Element {
  return (
    <div
      className="flagButton"
      onClick={props.switcherFunction}
      style={{
        padding: 5,
        cursor: "pointer",
      }}
    >
      {props.language.flag}
    </div>
  );
}
