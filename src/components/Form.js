/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
// you have done a good job altogether, I'll just change some stuff to show general guidelines when working with components
// React has a one way flow of data, it means that you can pass data as props only on the way down, can't do other way,
// that is from child to parent. General mechanism used when child component needs to change something that affects its parent
// is to pass a function in props from parent to child, and then child can call that function to notify the parent something
// is happening
// Having said that, there is no need for Form that adds to-do items to know about todos and setTodos
// and in the other direction, there is no need for parent of Form component to know anything about textInput and setTextInput
// So the way to go here is to have function that adds to-do item passed in to the form component, and textInput can be
// in Form components state, just as changed below
const Form = ({ addTodo }) => {

  const [textInput, setTextInput] = useState('')
    const eventHandler = (e) => {
      setTextInput(e.target.value)
    }

    const submitEventHandler = (e) => {
      e.preventDefault();
      addTodo({text: textInput, completed: false, id: Math.random().toString(16).slice(-4)})
      setTextInput('');
    }

  return (
        <form>
      <input value={textInput} onChange={eventHandler} type="text" className="todo-input" />
      <button onClick={submitEventHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
    )
}

export default Form;
