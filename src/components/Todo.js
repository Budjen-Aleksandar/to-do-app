import React from "react";


const Todo = ( { text, todo, todos, setTodos }) => {
    // detele and completed
    const deleteTodos = () => {
        setTodos(todos.filter(el => {
            return el.id !== todo.id
        }))
    }

    const completeTodo = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id) {
                return {
                    ...item, completed : !item.completed
                }
            }
            return item;
        }))
    }
    return (
        <div className="todo">
        <li className={`todo-item ${todo.completed ? 'completed': ''}`}>{text}</li>
        <button onClick={completeTodo} className="complete-btn">
        <i className="fas fa-check"></i>
        </button>
        <button onClick={deleteTodos} className="trash-btn">
        <i className="fas fa-trash"></i>
        </button>
        </div>
    )
}

export default Todo;