// <<<<<<< HEAD
// /* eslint-disable array-callback-return */
// import React from 'react'
// import Todo from './Todo';
// // The same changes and guidelines apply to this component as well as for Form component,
// // I leave it up to you to think about it and refactor this with that in mind (and for Todo component as well)
// const TodoList = ({ todos, setTodos }) => {
//     return (
//         <div className="todo-container">
//       <ul className="todo-list">
//        {todos.map((todo) => {
//          return <Todo
//          setTodos={setTodos}
//          todos={todos}
//          key={todo.id}
//          text={todo.text}
//          todo={todo}/>
//        })}
//       </ul>
//     </div>
//     )
// }

// export default TodoList;

/* eslint-disable array-callback-return */
import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, setTodos }) => {
    return (
        <div className="todo-container">
      <ul className="todo-list">
       {todos.map((todo) => {
         return <Todo 
         setTodos={setTodos} 
         todos={todos} 
         key={todo.id} 
         text={todo.text} 
         todo={todo}/>
       })}
      </ul>
    </div>
    )
}

export default TodoList;

