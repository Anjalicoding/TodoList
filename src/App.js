import React from "react";
import "./styles.css";
import TodoItem from "./TodoItem.js";
import todoData from "./todoData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    };
  }
  render() {
    const todos = this.state.todos.map((item) => (
      <TodoItem key={item.id} Task={item} />
    ));
    return (
      <div className="todo-list">
        <h1>My Daily Goals</h1>
        {todos}
      </div>
    );
  }
}

export default App;
