import axios from 'axios'

class AuthService{

    loginSuccess(username, password) {
        sessionStorage.setItem('AuthUserName', username)
        sessionStorage.setItem('AuthPassword', password)
        this.setUpAxiosInterceptor()
    }

    logoutSuccess() {
        sessionStorage.removeItem('AuthUserName')
        sessionStorage.removeItem('AuthPassword')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('AuthUserName')
        if (user === null) return false
        return true
    }

    getUsername() {
        return sessionStorage.getItem('AuthUserName');
    }

    authorizationCode() {
        let user = 'user'
        let password = 'P@$$w0rd'
        let basicAuth = 'Basic ' + window.btoa(user + ":" + password)
        return basicAuth
    }

    setUpAxiosInterceptor() {
        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = this.authorizationCode()
                }
                return config
            }
        )
    }
}

export default new AuthService()