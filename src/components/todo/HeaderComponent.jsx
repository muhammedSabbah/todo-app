import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthService from './AuthService.js'

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthService.isUserLoggedIn();
        console.log(isUserLoggedIn);
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    { isUserLoggedIn && <div><Link to="/welcome/TODO-APP" className="navbar-brand">TODO-Site</Link></div> }
                    <ul className="navbar-nav">
                        { isUserLoggedIn && <li><Link to="/welcome/TODO-APP" className="nav-link">Home</Link></li> }
                        { isUserLoggedIn && <li><Link to="/todo" className="nav-link">Todos</Link></li> }
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        { !isUserLoggedIn && <li><Link to="/login" className="nav-link">Login</Link></li> }
                        { isUserLoggedIn && <li><Link to="/logout" className="nav-link" onClick={AuthService.logoutSuccess}>Logout</Link></li> }
                    </ul>
                </nav>
                <hr />
            </header>
        );
    }
}

export default withRouter(HeaderComponent);