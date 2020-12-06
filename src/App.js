import React from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import {BrowserRouter} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {id: 1, content: "Learning React", completed: false},
        {id: 2, content: "Practice, Practice", completed: false},
      ],
      sunVisibility: true,
    };
  }

  addTodo = todo => {
    todo.id = Math.random();

    let todos

    if (todo.content !== "") {
      todos = [...this.state.todos, todo];
    } 

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

    this.lengthTodo()
  };

  toggleIcon = i => {
    this.setState({
      sunVisibility: this.state.sunVisibility === i ? false : true,
    });
  };

  deleteComplete = complete => {
    let todos = this.state.todos.filter(todo => {
      return !todo.completed === !complete;
    });

    this.setState({
      todos,
    });
  };

  lengthTodo = () => {
    let itemTodo = this.state.todos.filter(todo => todo.completed === false)
    console.log(itemTodo.length);

    return itemTodo
  }

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
            <BrowserRouter>
              <AddTodo
                addTodo={this.addTodo}
                sunVisibility={this.state.sunVisibility}
                toggleIcon={this.toggleIcon}
              />
              {/* <Route exact path='/todo' component={Todo} /> */}
              <Todo
                todos={this.state.todos}
                deleteTodo={this.deleteTodo}
                sunVisibility={this.state.sunVisibility}
                toggleComplete={this.toggleComplete}
                deleteComplete={this.deleteComplete}
                lengthTodo={this.lengthTodo}
              />

              <Nav
                sunVisibility={this.state.sunVisibility}
                todos={this.state.todos}
                deleteComplete={this.deleteComplete}
              />
            </BrowserRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
