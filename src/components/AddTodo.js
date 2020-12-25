import React, {useState, useContext} from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import {GlobalContext} from "../context/GlobalContext";

const AddTodo = ({toggleIcon, sunVisibility}) => {
  const {addTodo} = useContext(GlobalContext);

  const [content, setContent] = useState("");

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    //validation check to prevent submitting sth empty
    if (!content.trim()) return;
    addTodo({content});

    setContent("");
  };

  return (
    <div className='text-white mt-14'>
      <div className='flx mb-6'>
        <h1 className='text-3xl uppercase font-bold tracking-wider2xl md:text-4xl'>
          Todo
        </h1>
        {sunVisibility ? (
          <img
            onClick={() => toggleIcon(true)}
            src={sun}
            alt='sun'
            className='cursor-pointer'
          />
        ) : (
          <img
            onClick={() => toggleIcon(true)}
            src={moon}
            alt='moon'
            className='cursor-pointer'
          />
        )}
      </div>
      <div>
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type='checkbox'
            id='todo-check-form'
            className={`absolute mt-4 ml-4 border ${
              sunVisibility ? "border-color7" : "border-color5"
            }`}
          />
          <input
            value={content}
            placeholder='Create a new todo'
            onChange={e => handleChange(e)}
            className={`${
              sunVisibility
                ? "bg-color10 text-color11"
                : "bg-color3 text-color10"
            } w-full mb-5 p-4 rounded-md pl-12`}
          />
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
