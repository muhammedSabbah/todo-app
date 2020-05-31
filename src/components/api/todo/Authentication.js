import axios from 'axios'

class Authentication {

    basicAuth() {
        return axios.get("http://localhost:8080/basicauth")
    }

}

export default new Authentication()