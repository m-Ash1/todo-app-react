/* eslint-disable react/prop-types */

const Filters = ({ todolist, setTodoList, originalList, setOriginalList }) => {
  // write the logic for the filters here
  const handleFilterAll = () => {
    setTodoList(originalList);
  };

  const handleFilterActive = () => {
    setTodoList(originalList.filter((todo) => !todo.completed));
  };

  const handleFilterCompleted = () => {
    setTodoList(originalList.filter((todo) => todo.completed));
  };

  const handleClearCompleted = () => {
    setTodoList(todolist.filter((todo) => !todo.completed));
    setOriginalList(originalList.filter((todo) => !todo.completed));
  };

  const handleClearAll = () => {
    setTodoList([]);
    setOriginalList([]);
  };

  return (
    <div className="filters-wrapper">
      <div className="filters">
        <button onClick={handleFilterAll}>All</button>
        <button onClick={handleFilterActive}>Active</button>
        <button onClick={handleFilterCompleted}>Completed</button>
      </div>
      <div className="remove-tasks">
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear Completed
        </button>
        <button className="clear-all" onClick={handleClearAll}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Filters;
