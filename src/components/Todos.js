import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

class Todos extends Component {

  constructor() {
    super();

    let initialState = localStorage.getItem("todo-app-state");

    if( initialState == null ) {
      localStorage.setItem("todo-app-state", JSON.stringify({ todos: [] }));
      initialState = { todos: [] };
    } else {
      initialState = JSON.parse(initialState);
    }

    this.state = { ...initialState }
  }

  updateLocalStorage = () => {
    localStorage.setItem("todo-app-state", JSON.stringify({ ...this.state }));
  }
  
  addTodo = ( { title } )  => {
    let todos = [ ...this.state.todos , { title , completed : false } ];
    this.setState( ( prevState ) => ( { ...prevState, todos } ), this.updateLocalStorage );
  }

  markAsComplete = ( todo_index ) => {
    let todos = [ ...this.state.todos ];
    todos = todos.map( ( todo , index ) => {
      if ( index === todo_index ) {
        todo.completed = true;
      }
      return todo;
    })

    this.setState({ todos }, this.updateLocalStorage);
  }

  removeItem = ( index ) => {
    let todos = [ ...this.state.todos ];
    todos.splice( index , 1 );
    this.setState({ todos}, this.updateLocalStorage)
  }

  render() {
    return (
      <div className="container">
        <h1 className="app-title"> TODOS APP REACT</h1>
        <AddTodo addTodo = { this.addTodo } />
        <div className="todos-container">
            <h3 className="title"> Todos List </h3>
            { this.state.todos.map( ( todo , index ) => <Todo key = {index} todo = {todo} index = { index }  removeItem = { this.removeItem } markAsComplete = { this.markAsComplete } />  ) }
        </div>
      </div>
    );
  }
}

export default Todos;
