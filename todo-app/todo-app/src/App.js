import React, { useState, useRef, useCallback, Children } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos((todos) => todos.concat(todo));
      nextId.current += 1;
      console.log(nextId);
    },
    [todos],
  );

  const onRemove = useCallback(
    (id) => {
      if (!window.confirm("do you want delete?")) return;

      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback((id) => {
    setTodos(
      todos.map((todos) => (todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    );
  });

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
};

export default App;
