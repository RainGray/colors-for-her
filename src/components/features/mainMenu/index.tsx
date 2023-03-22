import { mainViewDefinitions } from "../../pages/mainViewDefinitions";
import { MainMenuItem } from "./mainMenuItem";

export const MainMenu = (): JSX.Element => {
  return (
    <div className="row">
      <p> MainMenu</p>
      {mainViewDefinitions.map((mvd, i) => (
        <MainMenuItem
          key={i}
          name={mvd.name}
          urlName={mvd.urlName}
          description={mvd.description}
        />
      ))}
    </div>
  );
};
