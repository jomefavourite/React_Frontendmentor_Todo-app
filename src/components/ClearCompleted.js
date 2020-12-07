import React from "react";

const ClearCompleted = ({ deleteComplete }) => {
  return (
    <React.Fragment>
      <p
        className='cursor-pointer'
        onClick={() => deleteComplete()}
      >
        Clear Completed
      </p>
    </React.Fragment>
  );
};

export default ClearCompleted;
