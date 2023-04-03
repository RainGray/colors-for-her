import { useNavigate } from "react-router";
import { ScreenSize } from "../../../models";
import { useAppContext } from "../../../support/context/appContextProvider";

export const Header = (): JSX.Element => {
  const app = useAppContext();
  var responsiveFontSize = "15vw";
  switch (app.screen.screenSize) {
    case ScreenSize.l:
      responsiveFontSize = "5vw";
      break;
    case ScreenSize.xl:
      responsiveFontSize = "5vw";
      break;
    case ScreenSize.m:
      responsiveFontSize = "5vw";
      break;
    case ScreenSize.s:
      responsiveFontSize = "15vw";
      break;
    case ScreenSize.xs:
      responsiveFontSize = "15vw";
      break;
    default:
      responsiveFontSize = "1vw";
      break;
  }

  const navigate = useNavigate();
  function returnToHome() {
    navigate("/");
  }

  return (
    <div
      className="header"
      style={{
        fontFamily: "Playball",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexShrink: 0,
        color: "var(--color-primary-3)",
        minHeight: 100,
      }}
    >
      <p
        style={{
          fontSize: responsiveFontSize,
          fontWeight: "bold",
          textAlign: "center",
          margin: 5,
          cursor: "pointer",
        }}
        onClick={returnToHome}
      >
        Colors for Her
      </p>
    </div>
  );
};
