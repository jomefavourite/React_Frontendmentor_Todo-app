import React from "react";

//added logic to filter completed. U can extract it as a variable so that it's not as ugly 😁

function ItemsLeft({todos}) {
  return <>{todos.length - todos.filter(t => t.completed).length} items left</>;
}

export default ItemsLeft;
