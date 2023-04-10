import { Outlet } from "react-router-dom";
import { ColorCardMenu } from "../../features";
import { useAppContext } from "../../../support/context/appContextProvider";

export function ColorsLayout(): JSX.Element {
  const app = useAppContext();
  return (
    <div className="section-layout">
      {app.screen.isMobile ? <></> : <ColorCardMenu />}
      <Outlet />
    </div>
  );
}
