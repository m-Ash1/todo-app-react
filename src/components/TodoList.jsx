/* eslint-disable react/prop-types */
import { ImFilesEmpty } from "react-icons/im";
import TodoItem from "./TodoItem";

const TodoList = ({ todolist, onDelete, onToggle }) => {
  return (
    <div className="todo-list">
      {todolist.length ? (
        <ul>
          {todolist.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
            />
          ))}
        </ul>
      ) : (
        <div className="icon">
          <ImFilesEmpty />
          ... No tasks yet
        </div>
      )}
    </div>
  );
};

export default TodoList;
