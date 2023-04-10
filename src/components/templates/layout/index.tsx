import { Outlet } from "react-router-dom";
import { Footer } from "../../features/footer";
import { Header } from "../../features/header";
import { MainMenu } from "../../features/mainMenu";
import { MainSection } from "../../pages/mainSection";
import { useAppContext } from "../../../support/context/appContextProvider";
import { ScreenSize } from "../../../models";
import { CollapsibleMenu } from "../../features";
import { useMemo } from "react";

export const Layout = (): JSX.Element => {
  const app = useAppContext();
  const menu = useMemo(() => currentMenu(), [app.screen.screenSize]);

  function currentMenu(): JSX.Element {
    if (app.screen.isMobile) {
      return <CollapsibleMenu />;
    } else {
      return <MainMenu />;
    }
  }

  return (
    <div className="layout">
      <Header />
      {menu}
      <MainSection>
        <Outlet />
      </MainSection>
      <Footer />
    </div>
  );
};
