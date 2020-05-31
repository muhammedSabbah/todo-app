import axios from 'axios'

class TodoService {

    constructor() {
        this.baseUrl = "http://localhost:8080/users/"
    }
    
    getTodos(username) {
        let url = this.baseUrl + username + "/todos"
        return axios.get(url)
    }

    getOneTodo(username, id) {
        let url = this.baseUrl + username + "/todos/" + id
        return axios.get(url)
    }

    createTodo(username, todo) {
        let url = this.baseUrl + username + "/todos"
        return axios.post(url, todo)
    }

    updateTodo(username, id, todo) {
        let url = this.baseUrl + username + "/todos/" + id
        return axios.put(url, todo)
    }
    
    deleteTodo(username, id) {
        let url = this.baseUrl + username + "/todos/" + id
        return axios.delete(url)
    }
}

export default new TodoService();