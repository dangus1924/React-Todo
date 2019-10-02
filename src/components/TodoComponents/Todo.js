import React from "react";

const Todo = props => {
  return (
    <div
      onClick={props.onClick}
      className={`item${props.item.purchased ? " purchased" : ""}`}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;
