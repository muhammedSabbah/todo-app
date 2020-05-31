import axios from "axios"

class HelloWorldService {

    constructor() {
        this.baseUrl = "http://localhost:8080/"
    }

    executeHelloWorldService() {
        let url = this.baseUrl + 'hello-world'
        return axios.get(url)
        //console.log("Execute Hello World Service")
    }

    executeHelloWorldBeanService() {
        let url = this.baseUrl + 'hello-world-bean'
        return axios.get(url)
        //console.log("Execute Hello World Bean Service")
    }

    executeHelloWorldPathVariableService(name) {
        let url = this.baseUrl + 'hello-world/name=' + name
        return axios.get(url)
        //console.log("Execute Hello World Path Variable Service")
    }
}

export default new HelloWorldService()