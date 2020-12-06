import React from "react";
import "./Todo.css";
import cross from "../images/icon-cross.svg";
import ClearCompleted from "./ClearCompleted";

const Todo = ({
  todos,
  deleteTodo,
  toggleComplete,
  sunVisibility,
  deleteComplete,
  lengthTodo,
}) => {
  let todo = todos.length ? (
    todos.map(todo => {
      return (
        <div
          key={todo.id}
          style={{
            textDecoration: `${todo.completed ? "line-through" : "none"}`,
            color: `${todo.completed ? "#393a4c" : ""}`,
          }}
          className={`Todo flx ${
            sunVisibility ? "bg-color10 text-color11" : "bg-color3 text-color15"
          }`}
        >
          <div className='flx'>
            <input
              type='checkbox'
              id='todo-check'
              className='cursor-pointer'
              onChange={() => toggleComplete(todo.id)}
              onClick={() => lengthTodo()}
            />
            <span className='ml-4'>{todo.content}</span>
          </div>
          <img
            src={cross}
            alt='close'
            className='w-4 h-4 cursor-pointer'
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      );
    })
  ) : (
    <div
      className={`Todo ${
        sunVisibility ? "bg-color10 text-color11" : "bg-color3"
      }`}
    >
      Add Todo List
    </div>
  );

  return (
    <div className='rounded-md overflow-hidden md:rounded-b-none'>
      <div>{todo}</div>
      <div className='md:hidden'>
        <div
          className={`Todo flx inactive ${
            sunVisibility ? "bg-color10" : "bg-color3"
          }`}
        >
          <p>{todos.length} items left</p>
          <ClearCompleted
            deleteComplete={deleteComplete}
            todoCompleted={todos.completed}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
