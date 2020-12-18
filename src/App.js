import React from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import Active from "./components/Active";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Completed from "./components/Completed";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
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
      ],
      sunVisibility: true,
    };
  }

  addTodo = todo => {
    todo.id = Math.random();

    let todos = [...this.state.todos, todo];

    this.setState({
      todos,
    });
  };

  deleteTodo = id => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });

    this.setState({
      todos,
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });

    this.lengthTodo();
  };

  toggleIcon = i => {
    this.setState({
      sunVisibility: this.state.sunVisibility === i ? false : true,
    });
  };
  //no need for arguments here
  deleteComplete = () => {
    let todos = this.state.todos.filter(todo => {
      return !todo.completed;
    });

    this.setState({
      todos,
    });
  };

  lengthTodo = () => {
    let itemTodo = this.state.todos.filter(todo => todo.completed === false);
    console.log(itemTodo.length);

    return itemTodo;
  };

  render() {
    return (
      <div
        className={`${
          this.state.sunVisibility ? "bg-color9" : "bg-color4"
        } h-screen w-full font-josefin`}
      >
        <div
          className={`foregroundBg ${
            this.state.sunVisibility
              ? "bg-color9 bg-bg1 md:bg-bg3"
              : "bg-color4 bg-bg2 md:bg-bg4"
          }`}
        >
          <div className='max-w-lg m-auto w-11/12'>
            <Router>
              <AddTodo
                addTodo={this.addTodo}
                sunVisibility={this.state.sunVisibility}
                toggleIcon={this.toggleIcon}
              />
              <Switch>
                <Route
                  exact
                  path='/'
                  render={props => (
                    <Todo
                      {...props}
                      todos={this.state.todos}
                      deleteTodo={this.deleteTodo}
                      sunVisibility={this.state.sunVisibility}
                      toggleComplete={this.toggleComplete}
                      deleteComplete={this.deleteComplete}
                      lengthTodo={this.lengthTodo}
                    />
                  )}
                />
                <Route
                  exact
                  path='/active'
                  render={props => (
                    <Active
                      {...props}
                      todos={this.state.todos}
                      sunVisibility={this.state.sunVisibility}
                      toggleComplete={this.toggleComplete}
                    />
                  )}
                />
                <Route
                  exact
                  path='/completed'
                  render={props => (
                    <Completed
                      {...props}
                      todos={this.state.todos}
                      sunVisibility={this.state.sunVisibility}
                    />
                  )}
                />
              </Switch>
              <Nav
                sunVisibility={this.state.sunVisibility}
                todos={this.state.todos}
                deleteComplete={this.deleteComplete}
              />
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
