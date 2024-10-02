import React, { useReducer } from "react";

const initState = 0;

const Action_up = "up";
const Action_down = "down";

const reducer = (state, action) => {
  switch (action) {
    case Action_up:
      return state + 1;
    case Action_down:
      return state - 1;
    default:
      return 0;
  }
};

function LearnReducer() {
  const [count, dispath] = useReducer(reducer, initState);
  return (
    <div className="m-10">
      <h1 className="py-3">Reducer</h1>
      <h2>{count}</h2>
      <button className="border p-2 mr-2" onClick={() => dispath(Action_up)}>up</button>
      <button className="border p-2 mr-2" onClick={() => dispath(Action_down)}>down</button>
      {/* <button onClick={() => dispath(default)}>return</button> */}
    </div>
  );
}

export default LearnReducer;
