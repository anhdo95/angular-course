export class AuthService {
  isLoggedIn: boolean

  isAuthenticated() {
    return new Promise(resolve => setTimeout(resolve, 200, this.isLoggedIn))
  }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }
}
