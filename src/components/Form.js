/* eslint-disable no-unused-vars */
import React from 'react';

const Form = ({ setTextInput, textInput, todos, setTodos }) => {
  
    const eventHandler = (e) => {
      setTextInput(e.target.value)
    }

    const submitEventHandler = (e) => {
      e.preventDefault();
      setTodos([
        ...todos, {text: textInput, completed: false, id: Math.random().toString(16).slice(-4)}
      ])
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