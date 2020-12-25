import React, {useContext} from "react";
import "./Todo.css";
import cross from "../images/icon-cross.svg";
import ClearCompleted from "./ClearCompleted";
import ItemsLeft from "./ItemsLeft";
import {GlobalContext} from "../context/GlobalContext";

const Todo = ({sunVisibility}) => {
  const {
    todos,
    deleteTodo,
    deleteComplete,
    toggleComplete,
    lengthTodo,
  } = useContext(GlobalContext);

  let todo = todos.length ? (
    todos.map(todo => {
      return (
        <div
          key={todo.id}
          style={{
            textDecoration: `${todo.completed ? "line-through" : "none"}`,
            color: `${todo.completed && sunVisibility ? "#393a4c" : ""}`,
          }}
          className={`Todo flx ${
            sunVisibility
              ? "bg-color10 text-color11 border-color7"
              : "bg-color3 text-color15 border-color2"
          }`}
        >
          <div className='flx'>
            <input
              type='checkbox'
              id='todo-check'
              checked={todo.completed ? true : false}
              className={`cursor-pointer border ${
                sunVisibility ? "border-color7" : "border-color5"
              }  hover:border-color1`}
              onClick={() => toggleComplete(todo.id)}
              onChange={() => lengthTodo()}
            />
            <span
              className={`ml-4 cursor-pointer transform hover:scale-105`}
              onClick={() => toggleComplete(todo.id)}
              onChange={() => lengthTodo()}
            >
              {todo.content}
            </span>
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
        sunVisibility
          ? "bg-color10 border-color7 text-color11"
          : "bg-color3 border-color2 text-color15"
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
          <ItemsLeft todos={todos} />
          <ClearCompleted deleteComplete={deleteComplete} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
