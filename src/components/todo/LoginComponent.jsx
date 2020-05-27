import React, { Component } from 'react'
import AuthService from './AuthService.js'

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
                <h1>Login</h1>
                <div className="container">
                    { this.state.loginSuccess && <div>Login Sucessful</div> }
                    { this.state.loginFailure && <div className="alert alert-warning">Login Failure</div> }
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.onChange} />
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.onChange}/>
                    <button onClick={this.onLoginClicked} className="btn btnLogin">Login</button>
                </div>
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
            AuthService.loginSuccess(this.state.username, this.state.password)
            this.setState({
                loginSuccess: true,
                loginFailure: false
            });
            this.props.history.push('/welcome/' + this.state.username)
        } else {
            this.setState({
                loginSuccess: false,
                loginFailure: true
            });
        }
    }

}

export default LoginComponent;