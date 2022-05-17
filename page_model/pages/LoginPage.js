import { Selector, t } from 'testcafe'

class LoginPage {
  constructor() {
    this.loginButton = Selector('#login-button')
    this.userField = Selector('#user-name')
    this.passwordField = Selector('#password')
    this.erroMessage = Selector("#login_button_container > div > form > div.error-message-container.error > h3").withText('sadface')
  }

    async submitLoginForm(username, password){
      await t
          .typeText(this.userField, username)
          .typeText(this.passwordField, password)
          .click(this.loginButton)
    }
}

export default new LoginPage()
