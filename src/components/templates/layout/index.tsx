import { Outlet } from "react-router-dom";
import { Footer } from "../../features/footer";
import { Header } from "../../features/header";
import { MainMenu } from "../../features/mainMenu";
import { MainSection } from "../../pages/mainSection";

export const Layout = (): JSX.Element => (
  <div className="column">
    <Header />
    <MainMenu />
    <MainSection>
      <Outlet />
    </MainSection>
    <Footer />
  </div>
);
