import React from "react";
import { TodoType } from "../App";
import { Todo } from "./Todo";

export const TodoList = ({
  items,
  updateCheck,
}: {
  items: TodoType[];
  updateCheck: (itemId: string) => void;
}) => {
  return (
    <div>
      {items.map((item) => (
        <Todo
          itemID={item.id}
          key={item.id}
          name={item.name}
          check={item.check}
          updateCheck={updateCheck}
        />
      ))}
    </div>
  );
};
