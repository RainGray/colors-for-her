import { animalsViewDefinitions } from "../../../pages/pagesViewDefinitions/animalsViewDefinitions";
import { MenuItem } from "../";

export const AnimalsCardMenu = (): JSX.Element => {
  return (
    <div
      className="row"
      style={{
        backgroundColor: "var(--color-primary-1)",
        fontWeight: "bold",
        color: "var(--color-secondary-1-4)",
        width: "100%",
      }}
    >
      {animalsViewDefinitions.map((mvd, i) => (
        <MenuItem
          key={i}
          name={mvd.name}
          urlName={mvd.urlName}
          description={mvd.description}
        />
      ))}
    </div>
  );
};
