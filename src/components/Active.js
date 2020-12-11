import React from "react";

const Active = ({ sunVisibility, todos }) => {
  let todo = todos.length ? (
    todos.map((todo) => {
      return (
        <div
          key={todo.id}
          className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx ${
            sunVisibility ? "bg-color10" : "bg-color3"
          } ${!todo.completed && "text-color11"}`}
          style={{ display: todo.completed === false ? " " : "none" }}
        >
          {todo.completed === false ? todo.content : null}
        </div>
      );
    })
  ) : (
    <div
      className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
        sunVisibility ? "bg-color10" : "bg-color3"
      }`}
    >
      No Todo Added
    </div>
  );

  // checks if at least one todo is completed
  const checkIfNoneActive = () => {
    let showMsg = false;
    todos.forEach((todo) => {
      if (!todo.completed) {
        showMsg = true;
      }
    });
    return showMsg;
  };

  // if no todos are completed show msg
  if (!checkIfNoneActive()) {
    return (
      <div
        className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
          sunVisibility ? "bg-color10" : "bg-color3"
        }`}
      >
        None Active
      </div>
    );
  }

  return <div>{todo}</div>;
};

export default Active;
