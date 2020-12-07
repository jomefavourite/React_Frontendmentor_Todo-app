import React from "react";
import ClearCompleted from "./ClearCompleted";
import { Link } from "react-router-dom";

const Nav = ({ sunVisibility, todos, deleteComplete }) => {
  //added logic to filter completed out line 12. U can extract it as a variable so that it's not as ugly 😁
  return (
    <div
      className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${sunVisibility ? "bg-color10" : "bg-color3"
        }`}
    >
      <p className='hidden md:block'>{todos.length - todos.filter(t => t.completed).length} items left</p>
      <Link to='/'>All</Link>
      <Link to='/todo'>Active</Link>
      <Link to='/'>Completed</Link>
      <div className='hidden md:block'>
        <ClearCompleted deleteComplete={deleteComplete} />
      </div>
    </div>
  );
};

export default Nav;
