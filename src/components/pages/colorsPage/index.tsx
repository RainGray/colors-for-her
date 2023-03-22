import { ColorCard } from "../../elements";
import { RadialGradientColor } from "../../../models";
import { ColorsPageTemplate } from "../../templates";
import { MyCardColor } from "../../../database";

export const ColorsPage = (): JSX.Element => {
  return <ColorsPageTemplate cards={MyCardColor} />;
};
