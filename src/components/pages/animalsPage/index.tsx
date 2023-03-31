import React from "react";
import { useContext } from "react";
import { ScreenSize } from "../../../models";
import { useAppContext } from "../../../support/context/appContextProvider";

const icons = ["🐄", "🐔", "🐈", "🐕", "🐁", "🐟"];

export const AnimalsPage = (): JSX.Element => {
  const app = useAppContext();
  return (
    <div className="Column">
      <div className="row"> Hello and welcome! Animals is here</div>
      <div className="row">
        {`your screen size now is ${app.screen.screenWidth}`}
      </div>
      <div className="row">
        {`your screen size now is ${app.screen.screenSize}`}
      </div>

      {app.screen.screenSize > 3 ? <AnimalsXL /> : <AnimalsM />}
    </div>
  );
};

const AnimalsXL = (): JSX.Element => {
  const cards: string[] = ["🐄", "🐔", "🐈", "🐕", "🐁", "🐟"];
  return (
    <div className="row">
      {cards.map((animal, index) => (
        <div style={{ padding: 10 }} key={index}>
          {animal}
        </div>
      ))}
    </div>
  );
};

const AnimalsM = (): JSX.Element => {
  const cards1: string[] = ["🐄", "🐔", "🐈"];
  const cards2: string[] = ["🐕", "🐁", "🐟"];

  return (
    <div className="column">
      <div className="row">
        {cards1.map((animal, index) => (
          <div style={{ padding: 10 }} key={index}>
            {animal}
          </div>
        ))}
      </div>
      <div className="row">
        {cards2.map((animal, index) => (
          <div style={{ padding: 10 }} key={index}>
            {animal}
          </div>
        ))}
      </div>
    </div>
  );
};
