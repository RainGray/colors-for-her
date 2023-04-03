import { ColorsPageTemplate } from "../../templates";
import { RainbowCardColor } from "../../../database";

export const RainbowColorsPage = (): JSX.Element => {
  return <ColorsPageTemplate cards={RainbowCardColor} />;
};
