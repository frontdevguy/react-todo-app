import React, { Component } from 'react';

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : ''
        }
    }

    addTodo = () => {
        if ( this.state.title.length > 0 ) {
           
            this.props.addTodo({
                'title' : this.state.title
            });
            
            this.setState({
                title : ''
            });

        }        
    }
    
    render () {
        return (
            <div className="add-todo-container">
                <h3 className="title"> Add Todo </h3>
                <input className="add-todo-title" placeholder="Enter todo" onChange = { ( { target : input } ) => this.setState( { title : input.value } ) }  value = { this.state.title } />
                <button className="add-todo-button" type="button" onClick = { this.addTodo } >
                     Add Todo 
                </button>
            </div>
        )
    }
}
export default AddTodo;
