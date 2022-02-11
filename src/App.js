/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// importing componenets!
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [textInput, setTextInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <header>
      <h1>To-Do-List </h1>
      </header>
      <Form textInput={textInput} todos={todos} setTodos={setTodos} setTextInput={setTextInput}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );


}

export default App;
