import { Outlet } from "react-router-dom";
import { AnimalsCardMenu } from "../../features/pagesMenus/AnimalsMenu";

export const AnimalsLayout = (): JSX.Element => (
  <div className="layout">
    <AnimalsCardMenu />
    <Outlet />
  </div>
);
