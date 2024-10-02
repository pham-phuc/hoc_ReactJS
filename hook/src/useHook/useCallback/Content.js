import React from "react";
import { memo } from "react";
function Content({onclick}) {
  return <div>
  <h1> useCallback </h1>
    <h2>Increase</h2>
    <button onClick={onclick}>Click !</button>
  </div>;
}

export default memo(Content) ;
