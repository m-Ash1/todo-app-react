/* eslint-disable react/prop-types */
import { useState } from "react";
import Btn from "./Btn";

const Input = ({ todolist, onAdd }) => {
  const [userInput, setUserInput] = useState("");
  const handleInput = (e) => {
    e.preventDefault();
    userInput !== ""
      ? onAdd([
          ...todolist,
          {
            id: (Math.random() * 100000).toFixed(),
            title: userInput,
            completed: false,
          },
        ])
      : null;
    setUserInput("");
  };
  return (
    <form className="input" onSubmit={handleInput}>
      <input
        type="text"
        placeholder="Write your task..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Btn name="add" />
    </form>
  );
};

export default Input;
