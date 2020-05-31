import React, { Component } from 'react'
import AuthService from './AuthService.js'
import TodoService from '../api/todo/TodoService.js'
import moment from 'moment'

class ListTodoComponent extends Component {

    constructor(){
        console.log("constructor")
        super()
        this.state = {
            todos: [],
            message: null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.onUpdateTodo = this.onUpdateTodo.bind(this)
        this.onDeleteTodo = this.onDeleteTodo.bind(this)
        this.onAddTodo = this.onAddTodo.bind(this)
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.refreshTodos()
    }

    refreshTodos() {
        TodoService.getTodos(AuthService.getUsername())
        .then(response => this.setState({todos: response.data}))
        .catch()
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        console.log(nextProps)
        console.log(nextState)
        return true
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    onUpdateTodo(id) {
        console.log("update todo id: " + id)
        this.props.history.push('/todo/' + id)
    }

    onDeleteTodo(id) {
        TodoService.deleteTodo(AuthService.getUsername(), id)
        .then(response => {
            this.setState({message: "Delete todo with id: " + id})
            this.refreshTodos()
        })
        .catch()
    }

    onAddTodo() {
        console.log("Add new Todo")
        this.props.history.push('/todo/-1')
    }

    render() {
        console.log("render")
        return(
        <div>
            <h1>List Todo</h1>
        { this.state.message && <div className="alert alert-success">{this.state.message}</div> }
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Is Completed?</th>
                        <th>Target Date</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                <tr>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{moment(todo.targetDate).format("YYYY-MM-DD")}</td>
                                <td>
                                <button className="btn btn-success" onClick={() => this.onUpdateTodo(todo.id)}>Update</button>
                                </td>
                                <td>
                                <button className="btn btn-warning" onClick={() => this.onDeleteTodo(todo.id)}>Delete</button>
                                </td>
                                </tr>
                            )
                        }
                </tbody>
                <div>
                    <button className="btn btn-success" onClick={() => this.onAddTodo()}>Add new todo</button>
                </div>
            </table>
            </div>
        </div>

        );
    }
}

export default ListTodoComponent;