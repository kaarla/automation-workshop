import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Testing inventory features')
  .page `https://www.saucedemo.com/`

test('Users can logout from inventory page', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t
    .click(InventoryPage.burgerButton)
    .click(InventoryPage.logoutOption)

  await t.expect(LoginPage.loginButton.exists).ok()
})
