import React, {Component} from 'react'
import moment from 'moment'
import './TodoComponentStyle.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import AuthService from '../todo/AuthService.js'
import TodoService from '../api/todo/TodoService.js'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id,
            description : '',
            targetDate : moment(new Date()).format("YYYY-MM-DD")
        }
        this.getTodoData = this.getTodoData.bind(this)
        this.validate = this.validate.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (this.state.id == -1) {
            return
        }
        console.log(this.state.id)
        TodoService.getOneTodo(AuthService.getUsername(), this.state.id)
        .then (response => this.getTodoData(response))
        .catch()
    }

    getTodoData(response) {
        this.setState({
            description: response.data.description,
            targetDate: moment(response.data.targetDate).format("YYYY-MM-DD")
        })
    }

    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = "Enter a description"
        } else if (values.description.length < 5) {
            errors.description = "Description should have 5 characters"
        }
        if(!moment(values.targetDate).isValid()) {
            errors.targetDate = "Please Enter Valid Target Date"
        }
        return errors
    }
    
    onSubmit(values) {
        let user = AuthService.getUsername()
        values.username = AuthService.getUsername()
        console.log(values)
        if (this.state.id == -1) {
            console.log("Create new Todo")
            TodoService.createTodo(user, values)
            .then(response => this.props.history.push('/todos'))
            .catch(error => console.log(error))
        } else {
            console.log("Update Todo")
            TodoService.updateTodo(user, this.state.id, values)
            .then(response => this.props.history.push('/todos'))
            .catch()
        }
    }

    render() {
        let id = this.state.id
        let description = this.state.description
        let targetDate = this.state.targetDate
        return (
            <div>
                <h1 className="todo-header">Todo</h1>
                <div className="container">
                <Formik 
                    initialValues = { { id, description, targetDate } }
                    validate = {this.validate}
                    validateOnChange = {false}
                    validateOnBlur = {false}
                    onSubmit = {this.onSubmit}
                    enableReinitialize = {true} >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage className="alert-message"
                                            name="description" component="div" />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"/>
                                </fieldset>
                                <ErrorMessage className="alert-message"
                                            name="targetDate" component="div" />
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"/>
                                </fieldset>
                                <button className="btn btn-success" type="submit">Save</button>
                            </Form>
                        )
                    }
                </Formik>
                </div>
            </div>
        );
    }
}

export default TodoComponent