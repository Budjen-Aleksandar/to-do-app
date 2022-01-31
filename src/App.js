// import logo from './logo.svg';
import React from 'react';
import './App.css';
// importing componenets!
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className='App'>
      <header>
      <h1>To-Do-List</h1>
      </header>
      <Form />
    </div>
  );
}

export default App;
