import React, { useContext, useEffect } from "react";
import lightModeSVG from "./assets/light-mode.svg";
import darkModeSVG from "./assets/dark-mode.svg";
import { DarkModeContext } from "./darkModeContext";

const Heading = (props) => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <div className="flex h-16 shadow-md flex-row justify-between items-center px-10 dark:bg-neutral-dark-blue-elements">
      <h3 className="font-bold text-base">Where in the world?</h3>
      <div className="flex items-center space-x-2" onClick={toggleDarkMode}>
        <img
          className="h-6 dark:fill-white"
          src={isDarkMode ? darkModeSVG : lightModeSVG}
          alt="dark mode"
        />
        <div>{isDarkMode ? "Light Mode" : "Dark Mode"}</div>
      </div>
    </div>
  );
};

export default Heading;
