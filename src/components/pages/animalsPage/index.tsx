import React from "react";
import { useContext } from "react";

export const AnimalsPage = (): JSX.Element => {
  const app = useContext(BlahBlahContext);
  return (
    <div className="row">
      <p> Hello and welcome! Animals is here</p>
    </div>
  );
};
