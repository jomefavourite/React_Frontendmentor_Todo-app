import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

const ClearCompleted = () => {
  const {deleteComplete} = useContext(GlobalContext);

  return (
    <React.Fragment>
      <p className='cursor-pointer' onClick={() => deleteComplete()}>
        Clear Completed
      </p>
    </React.Fragment>
  );
};

export default ClearCompleted;
