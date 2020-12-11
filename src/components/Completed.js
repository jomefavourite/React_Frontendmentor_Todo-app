import { React } from "react";

const Completed = ({ sunVisibility, todos }) => {
  if (todos.length === 0) {
    return (
      <div
        className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
          sunVisibility ? "bg-color10" : "bg-color3"
        }`}
      >
        No Todo Added
      </div>
    );
  }

  let todo = todos.map((todo) => {
    return (
      <div
        key={todo.id}
        className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
          sunVisibility ? "bg-color10" : "bg-color3"
        } ${!todo.completed && "text-color11"}`}
        style={{ display: todo.completed ? " " : "none" }}
      >
        {todo.content}
      </div>
    );
  });

  // checks if at least one todo is completed
  const checkIfNoneCompleted = () => {
    let showMsg = false;
    todos.forEach((todo) => {
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
        className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
          sunVisibility ? "bg-color10" : "bg-color3"
        }`}
      >
        None Completed
      </div>
    );
  }

  return <div>{todo}</div>;
};

export default Completed;
