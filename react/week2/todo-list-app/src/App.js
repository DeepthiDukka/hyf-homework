import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import Timer from "./components/Timer";
import TodoListItem from "./components/TodoListItem";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <Timer />
      <TodoListItem />
    </div>
  );
}

export default App;
