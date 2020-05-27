import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthRoute from './AuthRoute'
import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import TodoComponent from './TodoComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import FooterComponent from './FooterComponent'

class TodoApp extends Component {
    render() {
        return(
            <Router>
                <>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthRoute path="/todo" component={TodoComponent} />
                        <Route path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    <FooterComponent />
                </>
            </Router>
        );
    }
}

export default TodoApp;