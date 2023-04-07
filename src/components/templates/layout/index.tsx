import { Outlet } from "react-router-dom";
import { Footer } from "../../features/footer";
import { Header } from "../../features/header";
import { MainMenu } from "../../features/mainMenu";
import { MainSection } from "../../pages/mainSection";
import { useAppContext } from "../../../support/context/appContextProvider";
import { ScreenSize } from "../../../models";
import { CollapsibleMenu } from "../../features";

export const Layout = (): JSX.Element => {
  const app = useAppContext();
  const menu: JSX.Element =
    app.screen.screenSize === ScreenSize.l ||
    app.screen.screenSize === ScreenSize.xl ||
    app.screen.screenSize === ScreenSize.m ? (
      <MainMenu />
    ) : (
      // <CollapsibleMenu />
      <CollapsibleMenu />
    );
  console.log(
    app.screen.screenSize === ScreenSize.l || ScreenSize.xl || ScreenSize.m
  );

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
