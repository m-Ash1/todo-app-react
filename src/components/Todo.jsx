import Header from "./Header";
import Input from "./Input";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div className="todo">
      <Header />
      <Input/>
      <TodoList />
    </div>
  );
};

export default Todo;
