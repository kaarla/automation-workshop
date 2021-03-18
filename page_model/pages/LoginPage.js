import { Selector } from 'testcafe'

class LoginPage {
  constructor() {
    this.loginButton = Selector('#login-button')
    this.userField = Selector('#user-name')
    this.passwordField = Selector('#password')
    this.erroMessage = Selector('#login_button_container > div > form > h3')
  }
}

export default new LoginPage()
