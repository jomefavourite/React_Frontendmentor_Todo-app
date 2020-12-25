import React, {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext";

//added logic to filter completed. U can extract it as a variable so that it's not as ugly 😁

function ItemsLeft() {
  const {todos} = useContext(GlobalContext);
  return (
    <>{todos.length - todos.filter(todo => todo.completed).length} items left</>
  );
}

export default ItemsLeft;
