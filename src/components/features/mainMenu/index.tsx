import { NationalFlagButton } from "../../elements";
import { mainViewDefinitions } from "../../pages/mainViewDefinitions";
import { MainMenuItem } from "./mainMenuItem";

export const MainMenu = (): JSX.Element => {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "var(--color-primary-0)",
        fontWeight: "bold",
        color: "var(--color-secondary-1-4)",
      }}
    >
      <p> MainMenu</p>
      {mainViewDefinitions.map((mvd, i) => (
        <MainMenuItem
          key={i}
          name={mvd.name}
          urlName={mvd.urlName}
          description={mvd.description}
        />
      ))}
      <NationalFlagButton/>
      <NationalFlagButton/>
    </div>
  );
};
