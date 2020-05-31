import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import AuthService from '../todo/AuthService.js'
import HelloWorldService from '../../components/api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {

    constructor() {
        super()
        this.state = {
            data: null
        }
        this.callHelloWorldService = this.callHelloWorldService.bind(this)
        this.handleSuccessfullResponse = this.handleSuccessfullResponse.bind(this)
        this.handleError = this.handleError.bind(this)
    }

    callHelloWorldService() {
        //HelloWorldService.executeHelloWorldService()
        //.then(response => this.handleSuccessfullResponse(response))
        //.catch()

        //HelloWorldService.executeHelloWorldBeanService()
        //.then(response => this.handleSuccessfullResponse(response))
        //.catch()

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessfullResponse(response))
        .catch(error => this.handleError(error))
    }
    
    handleSuccessfullResponse(response) {
        console.log(response)
        this.setState({data: response.data.message})
    }

    handleError(error) {
        console.log(error.response)
        let errorMessage= ''
        if (error.message) {
            errorMessage += error.message
        }
        if(error.response && error.response.data) {
            errorMessage += error.response.data
        }
        this.setState({data: errorMessage})
    }

    render() {
        return(
        <div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome Mr/{AuthService.getUsername()} you can manage todo tasks
                <Link to="/todos" > here.</Link>
            </div>
            <div className="container">
                Call Hello World Service
                <button className="btn" onClick={this.callHelloWorldService}>Call</button>
            </div>
            <div className="container">
                {this.state.data}
            </div>
        </div>
        );
    }
}

export default WelcomeComponent;