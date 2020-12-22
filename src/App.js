import React, {useState} from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import Active from "./components/Active";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Completed from "./components/Completed";

const App = () => {
  const [todos, setTodos] = useState([
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
  ]);

  const [sunVisibility, setSunVisibility] = useState(true);

  let addTodo = todo => {
    todo.id = Math.random();

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

  let toggleIcon = i => {
    setSunVisibility(sunVisibility === i ? false : true);
  };

  let deleteComplete = () => {
    let newtodos = todos.filter(todo => {
      return !todo.completed;
    });

    setTodos(newtodos);
  };

  let lengthTodo = () => {
    let itemTodo = todos.filter(todo => todo.completed === false);
    // console.log(itemTodo.length);

    return itemTodo;
  };

  return (
    <div
      className={`${
        sunVisibility ? "bg-color9" : "bg-color4"
      } h-screen w-full font-josefin`}
    >
      <div
        className={`foregroundBg ${
          sunVisibility
            ? "bg-color9 bg-bg1 md:bg-bg3"
            : "bg-color4 bg-bg2 md:bg-bg4"
        }`}
      >
        <div className='max-w-lg m-auto w-11/12'>
          <Router>
            <AddTodo
              addTodo={addTodo}
              sunVisibility={sunVisibility}
              toggleIcon={toggleIcon}
            />
            <Switch>
              <Route exact path='/'>
                <Todo
                  todos={todos}
                  deleteTodo={deleteTodo}
                  sunVisibility={sunVisibility}
                  toggleComplete={toggleComplete}
                  deleteComplete={deleteComplete}
                  lengthTodo={lengthTodo}
                />
              </Route>
              <Route exact path='/active'>
                <Active
                  todos={todos}
                  sunVisibility={sunVisibility}
                  toggleComplete={toggleComplete}
                />
                />
              </Route>
              <Route exact path='/completed'>
                <Completed todos={todos} sunVisibility={sunVisibility} />
              </Route>
            </Switch>
            <Nav
              sunVisibility={sunVisibility}
              todos={todos}
              deleteComplete={deleteComplete}
            />
          </Router>
        </div>
      </div>
    </div>
  );
};

export default App;
