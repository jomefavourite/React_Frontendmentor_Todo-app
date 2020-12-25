import React, {useState} from "react";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import Nav from "./components/Nav";
import Active from "./components/Active";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Completed from "./components/Completed";
import GlobalContextProvider from "./context/GlobalContext";

const App = () => {
  const [sunVisibility, setSunVisibility] = useState(true);

  let toggleIcon = i => {
    setSunVisibility(sunVisibility === i ? false : true);
  };

  return (
    <GlobalContextProvider>
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
              <AddTodo toggleIcon={toggleIcon} sunVisibility={sunVisibility} />
              <Switch>
                <Route exact path='/'>
                  <Todo sunVisibility={sunVisibility} />
                </Route>
                <Route exact path='/active'>
                  <Active sunVisibility={sunVisibility} />
                </Route>
                <Route exact path='/completed'>
                  <Completed sunVisibility={sunVisibility} />
                </Route>
              </Switch>
              <Nav sunVisibility={sunVisibility} />
            </Router>
          </div>
        </div>
      </div>
    </GlobalContextProvider>
  );
};

export default App;
