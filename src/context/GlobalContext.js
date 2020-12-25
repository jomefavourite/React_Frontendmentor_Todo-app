import React, {useState, useEffect, createContext} from "react";

export const GlobalContext = createContext();

const GlobalContextProvider = ({children}) => {
  let defTodos = [
    {id: 1, content: "Complete online JavaScript course", completed: true},
    {id: 2, content: "Jog around the park 3x", completed: false},
    {id: 3, content: "10 minutes meditation", completed: false},
    {id: 4, content: "Read for 1 hour", completed: false},
    {id: 5, content: "Pick up groceries", completed: false},
    {
      id: 6,
      content: "Complete Todo App on Frontend Mentor",
      completed: false,
    },
  ];

  function ls() {
    let localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : defTodos;
  }

  const [todos, setTodos] = useState(ls());

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  let addTodo = todo => {
    todo.id = Math.random();
    todo.completed = false;

    let newtodos = [...todos, todo];

    setTodos(newtodos);
  };

  let deleteTodo = id => {
    let newtodos = todos.filter(todo => {
      return todo.id !== id;
    });

    setTodos(newtodos);
  };

  let toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );

    lengthTodo();
  };

  let deleteComplete = () => {
    let newtodos = todos.filter(todo => {
      return !todo.completed;
    });

    setTodos(newtodos);
  };

  let lengthTodo = () => {
    let itemTodo = todos.filter(todo => todo.completed === false);

    return itemTodo;
  };

  return (
    <GlobalContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        deleteTodo,
        deleteComplete,
        toggleComplete,
        lengthTodo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
