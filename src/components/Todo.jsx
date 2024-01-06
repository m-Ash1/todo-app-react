/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Filters from "./Filters";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = ({ todolist, setTodoList, originalList, setOriginalList }) => {
  const handleDelete = (id) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
    setOriginalList((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    setOriginalList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(todolist)); 
  }, [todolist]);

  return (
    <div className="todo">
      <div className="body">
        <Header />
        <Input
          todolist={todolist}
          onAdd={setTodoList}
          onAddOriginal={setOriginalList}
        />
        <TodoList
          todolist={todolist}
          onDelete={handleDelete}
          onToggle={handleToggle}
          setOriginalList={setOriginalList}
        />
      </div>
      <Filters
        todolist={todolist}
        setTodoList={setTodoList}
        originalList={originalList}
        setOriginalList={setOriginalList}
      />
    </div>
  );
};

export default Todo;
