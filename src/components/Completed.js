import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

const Completed = ({sunVisibility}) => {
  const {todos} = useContext(GlobalContext);

  if (todos.length === 0) {
    return (
      <div
        className={`md:mt-0 text-center space-x-4 rounded-md md:rounded-b-none Todo flx text-color13 ${
          sunVisibility
            ? "bg-color10 border-color7"
            : "bg-color3 border-color2 text-color15"
        }`}
      >
        No Todo Added
      </div>
    );
  }

  let todo = todos.map(todo => {
    return (
      <div
        key={todo.id}
        className={`md:mt-0 text-center space-x-4 md:rounded-t-none Todo flx ${
          sunVisibility
            ? "bg-color10 border-color7 text-color11"
            : "bg-color3 border-color2 text-color15"
        }`}
        style={{display: todo.completed ? " " : "none"}}
      >
        {todo.content}
      </div>
    );
  });

  // checks if at least one todo is completed
  const checkIfNoneCompleted = () => {
    let showMsg = false;
    todos.forEach(todo => {
      if (todo.completed) {
        showMsg = true;
      }
    });
    return showMsg;
  };

  // if no todos are completed show msg
  if (!checkIfNoneCompleted()) {
    return (
      <div
        className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-b-none Todo flx text-color13 ${
          sunVisibility
            ? "bg-color10 border-color7"
            : "bg-color3 border-color2 text-color15"
        }`}
      >
        None Completed
      </div>
    );
  }

  return (
    <div className='rounded-md overflow-hidden md:rounded-b-none'>{todo}</div>
  );
};

export default Completed;
