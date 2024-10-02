import React, { createContext } from "react";
import { useState } from "react";

const ThemeContext = createContext();

function ThemeProvide({children}) {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    return setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    handleClick
  }

  return (
    <div>
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    </div>
  );
}

export {ThemeProvide,ThemeContext  };
