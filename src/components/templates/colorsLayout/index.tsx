import { Outlet } from "react-router-dom";
import { ColorCardMenu } from "../../features";

export const ColorsLayout = (): JSX.Element => (
  <div className="layout">
    <ColorCardMenu />
    <Outlet />
  </div>
);
