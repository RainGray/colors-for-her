import { LanguageSwitcher } from "../../elements/molecules/languageSwitcher";
import { mainViewDefinitions } from "../../pages/mainViewDefinitions";
import { MainMenuItem } from "../mainMenu/mainMenuItem";
import { CollapsibleMenuItem } from "./collapsibleMenuItem";
import "./style.css";
import { useState } from "react";

type Display = "block" | "none";

export const CollapsibleMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [display, setDisplay] = useState<Display>("none");

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setDisplay(display === "none" ? "block" : "none");
  };

  const OpenButton = () => {
    return (
      <div
        className="row"
        onClick={handleToggle}
        style={{ padding: "0px 20px" }}
      >
        <p style={{ padding: "5px 5px", margin: "0px" }}>Main Menu </p>
        {isOpen ? "🔼" : "🔽"}
      </div>
    );
  };

  const MenuItems = () => {
    return (
      <div className="content" style={{ display: display }}>
        {mainViewDefinitions.map((mvd, i) => (
          <CollapsibleMenuItem
            key={i}
            name={mvd.name}
            urlName={mvd.urlName}
            description={mvd.description}
            childMenu={mvd.childMenu}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="main-menu">
      <div
        className="row"
        style={{ width: "100%", justifyContent: "space-between" }}
      >
        <OpenButton />
        <LanguageSwitcher />
      </div>
      <MenuItems />
    </div>
  );
};
