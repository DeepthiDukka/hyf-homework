import React from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoHeader />
      <Timer />
      <TodoList />
    </div>
  );
}

export default App;
