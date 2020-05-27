import axios from "axios"


class HelloWorldService {

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world')
        //console.log("Execute Hello World Service")
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log("Execute Hello World Bean Service")
    }

    executeHelloWorldPathVariableService(name) {
        return axios.get('http://localhost:8080/hello-world/name=' + name)
        //console.log("Execute Hello World Path Variable Service")
    }
}

export default new HelloWorldService()