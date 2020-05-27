import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
    render() {
        return(
        <div>
            <h1>Welcome!</h1>
            <div className="container">
                Welcome Mr/{this.props.match.params.name} you can manage todo tasks
                <Link to="/todo" > here.</Link>
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
        this.setState({data: response.data.message})
        console.log(response)
    }

    handleError(error) {
        console.log(error.response)
    }
}

export default WelcomeComponent;