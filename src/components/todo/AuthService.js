
class AuthService{

    loginSuccess(username, password) {
        sessionStorage.setItem('AuthUserName', username)
        sessionStorage.setItem('AuthPassword', password)
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
}

export default new AuthService()