import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
function App() {
  const [todolist, setTodoList] = useState(
    localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : []
  );
  const [originalList, setOriginalList] = useState(todolist);

  return (
    <div className="wrapper">
      <Todo todolist={todolist} setTodoList={setTodoList} originalList={originalList} setOriginalList={setOriginalList} />
    </div>
  );
}

export default App;
