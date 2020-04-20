export class AuthService {
  isLoggedIn: boolean = true

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
