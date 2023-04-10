import { Outlet } from "react-router-dom";
import { AnimalsCardMenu } from "../../features/pagesMenus/AnimalsMenu";
import { useAppContext } from "../../../support/context/appContextProvider";
import { ScreenSize } from "../../../models";

export function AnimalsLayout(): JSX.Element {
  const app = useAppContext();
  return (
    <div className="layout">
      {app.screen.isMobile ? <></> : <AnimalsCardMenu />}
      <Outlet />
    </div>
  );
}
