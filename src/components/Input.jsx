import { useState } from "react";
import Btn from "./Btn";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Write your task..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <Btn name="add" />
    </div>
  );
};

export default Input;
