import React from "react";
import ClearCompleted from "./ClearCompleted";
import {NavLink} from "react-router-dom";
import ItemsLeft from "./ItemsLeft";
import "./Nav.css";

const Nav = ({sunVisibility, todos, deleteComplete}) => {
  return (
    <div
      className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo  text-color13 ${
        sunVisibility ? "bg-color10" : "bg-color3"
      } border-none`}
    >
      <div className='flx w-56 md:w-auto m-auto'>
        <div className='hidden md:block'>
          <ItemsLeft todos={todos} />
        </div>
        <NavLink exact to='/'>
          All
        </NavLink>
        <NavLink to='/active'>Active</NavLink>
        <NavLink to='/completed'>Completed</NavLink>
        <div className='hidden md:block'>
          <ClearCompleted deleteComplete={deleteComplete} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
