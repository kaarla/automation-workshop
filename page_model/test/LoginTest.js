import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import {CREDENTIALS} from '../data/Constants'

fixture('Testing login feature')
  .page `https://www.saucedemo.com/`

test('Users can login using valid credentials', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
  await t.expect(InventoryPage.pageTitle.exists).ok()
})

test('Users cannot login using invalid credentials', async t =>{
  await LoginPage.submitLoginForm(CREDENTIALS.INVALID_USER.USERNAME, CREDENTIALS.INVALID_USER.PASSWORD)
  await t.expect(LoginPage.erroMessage.innerText).contains('Epic sadface')
})
