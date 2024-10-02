import { useCallback, useState } from "react";
import Render from "./useHook/useContext/Render";
import { ThemeProvide } from "./useHook/useContext/ThemeProvide";
import Memo from "./useHook/useMemo/Memo";
import Content from "./useHook/useCallback/Content";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  return (
    <ThemeProvide>
      <div>
        <Render />
        <Memo />

        <Content onclick={handleIncrease} />
        <p>{count}</p>
      </div>
    </ThemeProvide>
  );
}

export default App;
