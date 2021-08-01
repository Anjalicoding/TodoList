import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <label> {props.Task.text} </label>
    </div>
  );
}

export default TodoItem;
