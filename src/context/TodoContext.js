import React, {createContext, useState} from "react";

export const TodoContext = createContext();

const TodoContextProvider = props => {
  const [todos, setTodos] = useState([
    {id: 1, content: "Learning React", completed: false},
    {id: 2, content: "Practice, Practice", completed: false},
  ]);

  const [sunVisibility, setSunVisibility] = useState(true);

  let addTodo = todo => {
    console.log(todo);

    todo.id = Math.random();

    let newTodos = [...todos, todo];

    setTodos(newTodos);
  };

  let deleteTodo = id => {
    let newTodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };

  let toggleComplete = id => {
    setTodos(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    lengthTodo();
  };

  let toggleIcon = i => {
    setSunVisibility({
      sunVisibility: sunVisibility === i ? false : true,
    });
  };

  let deleteComplete = () => {
    let newTodos = todos.filter(todo => {
      return !todo.completed;
    });

    setTodos(newTodos);
  };

  let lengthTodo = () => {
    let itemTodo = todos.filter(todo => todo.completed === false);

    return itemTodo;
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        sunVisibility,
        addTodo,
        deleteTodo,
        toggleComplete,
        toggleIcon,
        deleteComplete,
        lengthTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
