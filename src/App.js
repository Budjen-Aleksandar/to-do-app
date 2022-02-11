/* eslint-disable no-unused-vars */
// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
// importing componenets!
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  // also I guess state is missing here
  const [todos, setTodos] = useState([])
  // changing this line as per comment on the Form component
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  return (
    <div className='App'>
      <header>
      <h1>To-Do-List </h1>
      </header>
      <Form addTodo={addTodo}/>
      {/*probably missing here*/}
      <TodoList setTodos={setTodos} todos={todos} />

    </div>
  );


}

export default App;
