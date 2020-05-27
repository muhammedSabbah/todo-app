import axios from 'axios'

class TodoService {

    getTodos(username) {
        return axios.get("http://localhost:8080/users/" + username + "/todos")
    }

}

export default new TodoService();