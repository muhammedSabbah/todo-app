import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class TodoApp extends Component {
    render() {
        return(
            <Router>
                <>
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/welcome" component={WelcomeComponent} />
                </>
            </Router>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return(
            <div>Hello World</div>
        );
    }
}

class LoginComponent extends Component {

    constructor() {
        super();

        this.state = {
            username: 'sabbah',
            password: '',
            loginSuccess: false,
            loginFailure: false
        }

        this.onChange = this.onChange.bind(this)
        this.onLoginClicked = this.onLoginClicked.bind(this)

    }

    render() {
        return(
            <div>
                { this.state.loginSuccess && <div>Login Sucessful</div> }
                { this.state.loginFailure && <div>Login Failure</div> }
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.onChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                <button onClick={this.onLoginClicked}>Login</button>
            </div>
        );
    }

    onChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        console.log(event.target.name + ': ' + event.target.value);
    }

    onLoginClicked() {
        // username: sabbah, password: ABC
        if (this.state.username === 'sabbah' && this.state.password === 'ABC') {
            this.setState({
                loginSuccess: true,
                loginFailure: false
            });
        } else {
            this.setState({
                loginSuccess: false,
                loginFailure: true
            });
        }
    }

}

export default TodoApp;