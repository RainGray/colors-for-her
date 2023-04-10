import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";
import { ViewDefinition } from "../../../../models";

export const CollapsibleMenuItem: React.FC<{
  name: string;
  urlName: string;
  description: string;
  childMenu?: ViewDefinition[];
}> = ({ name, urlName, description, childMenu }) => {
  const resolved = useResolvedPath(urlName);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  const navigate = useNavigate();

  const match = useMatch(`/${urlName}/*`);

  return (
    <div style={{ padding: "5px 10px" }}>
      <p
        style={{
          color: isActive || match ? "var(--color-secondary-1-2)" : "#000000",
          cursor: "pointer",
          margin: "0px",
        }}
        onClick={(): void => navigate(urlName)}
      >
        {name}
      </p>
      <div
        className="column"
        style={{
          paddingLeft: "10px",
          alignItems: "start",
        }}
      >
        {childMenu ? (
          childMenu.map((cvd, i) => (
            <CollapsibleMenuItem
              key={i}
              name={cvd.name}
              urlName={urlName + "/" + cvd.urlName}
              description={cvd.description}
              childMenu={cvd.childMenu}
            />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
