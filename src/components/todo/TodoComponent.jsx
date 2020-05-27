import React, { Component } from 'react'
import AuthService from '../todo/AuthService.js'
import TodoService from '../api/todo/TodoService.js'

class TodoComponent extends Component {

    constructor(){
        super()
        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        TodoService.getTodos(AuthService.getUsername())
        .then(response => this.setState({todos: response.data}))
        .catch()
    }

    render() {
        return(
        <div>
            <h1>List Todo</h1>
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                <tr>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                                </tr>
                            )
                        }
                </tbody>
            </table>
            </div>
        </div>

        );
    }
}

export default TodoComponent;