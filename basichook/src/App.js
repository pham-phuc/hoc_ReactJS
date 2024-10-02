import {  useState } from "react";
import LearnReducer from "./component/LearnReducer";
import LearnUseState from "./component/LearnUseState";
import LearnUseEffect from "./component/LearnUseEffect";


function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App mx-auto my-10">
      <LearnUseState />
      <LearnReducer />

      <div>
        <h1 className="ml-10 pb-10">LearnUseEffect</h1>
        <button className="border p-1 ml-10" onClick={() => setShow(!show)}>
          Tongle
        </button>
        {show && <LearnUseEffect />}
      </div>
    </div>
  );
}

export default App;
