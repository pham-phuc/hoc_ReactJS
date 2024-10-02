import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { CreateNewItems } from "./components/CreateNewItems";
import { TodoList } from "./components/TodoList";
import { Generics } from "./typeTsx/Generics";

export type TodoType = { id: string; name: string; check: boolean };

function App() {
  const [items, setItems] = useState<TodoType[]>(() => {
    const saveTodo = JSON.parse(localStorage.getItem("items") ?? "[]");
    if (saveTodo?.length) {
      return saveTodo;
    }
    return [];
  });
  const [itemJobs, setItemJobs] = useState("");

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemJobs(e.target.value);
  };

  const handleAdd = () => {
    const newItemJob: TodoType = {
      id: uuidv4(),
      name: itemJobs,
      check: false,
    };
    setItems([newItemJob, ...items]);
    setItemJobs("");
  };

  const updateCheck = (itemId: string) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            check: !item.check,
          };
        }
        return item;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <h1>This is todo app buil with TypeScript & ReactJS</h1>
      <CreateNewItems
        onInputChange={onInputChange}
        itemJobs={itemJobs}
        handleAdd={handleAdd}
      />
      <TodoList items={items} updateCheck={updateCheck} />
      <Generics />
    </>
  );
}

export default App;
