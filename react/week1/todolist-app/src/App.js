import React from 'react';
import './App.css';
import TodoHeader from'./components/TodoHeader';
import TodoItem from './components/TodoItem';
import TodoFooter from './components/TodoFooter';

function App() {
  return (
    <div className="App">
      <TodoHeader/>
      <TodoItem/>
      <TodoFooter/>
    </div>
  );
}

export default App;

