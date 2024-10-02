import React from "react";
import { useContext } from "react";
import LearnUseContext from "./LearnUseContext";
import { ThemeContext } from "./ThemeProvide";

function Render() {
  const context = useContext(ThemeContext);
  console.log(context);
  return (
    <div><div>
          <h1 className="ml-10 pb-10 ">LearnUseContext</h1>
          <button className="border p-1 ml-10" onClick={context.handleClick}>Tongle Theme</button>
          <LearnUseContext />
        </div>
      
    </div>
  );
}

export default Render;
