import { createContext, useEffect, useState } from "react";
import { getItem, setItem } from "../utils/lsUtils";

export const ThemeContext = createContext();

const initialDarkMode = false;

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    let themeMode = getItem("theme");
    setDarkMode(themeMode === "dark" ? true : false);

    if (themeMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkMode(!darkMode);
    setItem("theme", darkMode ? "light" : "dark");
  };

  const data = {
    handleDarkMode,
    darkMode,
  };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
