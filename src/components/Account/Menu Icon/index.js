import React, { useEffect, useState } from "react";
import { MenuRounded } from "@material-ui/icons";

import "./style.css";
const MenuIcon = ({ setDrawerState, color }) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowSize < 480 && (
        <MenuRounded
          className="menu-icon"
          onClick={() => setDrawerState(prevState => !prevState)}
          fontSize="large"
          style={{ color: color && "var(--light-color)", position: "relative" }}
        />
      )}
    </>
  );
};

export default MenuIcon;
