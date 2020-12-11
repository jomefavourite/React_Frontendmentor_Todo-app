import React from "react";

const Completed = ({sunVisibility, todos}) => {
  let todo = todos.length ? (
    todos.map(todo => {
      return todo.completed ? (
        <div
          key={todo.id}
          className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
            sunVisibility ? "bg-color10" : "bg-color3"
          } ${!todo.completed && "text-color11"}`}
        >
          {todo.completed && todo.content}
        </div>
      ) : (
        <div
          className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
            sunVisibility ? "bg-color10" : "bg-color3"
          }`}
        >
          None Completed
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

  return <div>{todo}</div>;
};

export default Completed;
