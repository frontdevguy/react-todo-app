import React from 'react';

let Todo = ( { todo , index , removeItem, markAsComplete } ) => {

  return <div className="todo">
              <span className={ todo.completed ? 'badge completed' : 'badge pending' } > { todo.completed ? 'completed' : 'pending' } </span>
              { !todo.completed && <button className="mark-todo-as-complete" onClick = { () => markAsComplete ( index ) } > <i className="fa fa-check"></i> </button> }
              <button className="remove-todo" onClick = { () => removeItem ( index ) } > <i className="fa fa-trash"></i> </button>
              <li className="todo-item">
                    <p className="todo-title"> { todo.title } </p>
              </li>
         </div>
}

export default Todo;
