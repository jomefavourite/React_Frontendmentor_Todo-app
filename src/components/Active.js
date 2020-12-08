import React from "react";

const Active = props => {
  return (
    <div
      className={`mt-5 md:mt-0 text-center space-x-4 rounded-md md:rounded-t-none Todo flx text-color13 ${
        props.sunVisibility ? "bg-color10" : "bg-color3"
      }`}
    >
      <div>Hello</div>
      {console.log(props)}
    </div>
  );
};

export default Active;
