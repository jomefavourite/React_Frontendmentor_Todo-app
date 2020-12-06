import React from "react";

const ClearCompleted = ({deleteComplete, todoCompleted}) => {
  return (
    <React.Fragment>
      <p
        className='cursor-pointer'
        onClick={() => deleteComplete(todoCompleted)}
      >
        Clear Completed
      </p>
    </React.Fragment>
  );
};

export default ClearCompleted;
