import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

fixture('Login feature testing')
  .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t =>{
  await t
      .typeText(LoginPage.userField, "standard_user")
      .typeText(LoginPage.passwordField, "secret_sauce")
      .click(LoginPage.loginButton)

  await t.expect(InventoryPage.pageTitle.exists).ok()
})
