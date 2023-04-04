import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

export const MainMenuItem: React.FC<{
  name: string;
  urlName: string;
  description: string;
  // icon: JSX.Element;
}> = ({ name, urlName, description }) => {
  const resolved = useResolvedPath(urlName);
  const isActive = useMatch({ path: resolved.pathname, end: true });
  const navigate = useNavigate();

  const match = useMatch(`/${urlName}/*`);

  return (
    <div
      style={{ padding: 10, cursor: "pointer" }}
      onClick={(): void => navigate(urlName)}
    >
      <p style={{ color: (isActive || match) ? "var(--color-secondary-1-2)" : "#000000" }}>
        {name}
      </p>
    </div>
  );
};
