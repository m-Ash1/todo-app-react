import { useEffect, useState } from "react";
import Filters from "./Filters";
import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {
  const [todolist, setTodoList] = useState(
    localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
  );
  const handleDelete = (id) => {
    setTodoList(todolist.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
    setTodoList(
      todolist.map((todo) =>
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
        <Input todolist={todolist} onAdd={setTodoList} />
        <TodoList
          todolist={todolist}
          onDelete={handleDelete}
          onToggle={handleToggle}
        />
      </div>
      <Filters todolist={todolist} setTodoList={setTodoList} />
    </div>
  );
};

export default Todo;
