/* eslint-disable react/prop-types */
const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <li>
      <div className="item">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />

        <span
          className="itemName"
          style={todo.completed ? { textDecoration: "line-through" } : {}}
        >
          {todo.title}
        </span>
      </div>
      <div className="delete" onClick={() => onDelete(todo.id)}>
        X
      </div>
    </li>
  );
};

export default TodoItem;
