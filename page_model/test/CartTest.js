import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'
import Checkout1Page from '../pages/Checkout1Page'
import Checkout2Page from '../pages/Checkout1Page'

import {CREDENTIALS} from '../data/Constants'
import {CONTACT_INFO} from '../data/Constants'

fixture('Testing inventory features')
  .page `https://www.saucedemo.com/`
  .beforeEach(async t => {
    await LoginPage.submitLoginForm(CREDENTIALS.VALID_USER.USERNAME, CREDENTIALS.VALID_USER.PASSWORD)
    await t
      .click(InventoryPage.itemBackpackButton)
      .click(InventoryPage.cartButton)

    await t.expect(CartPage.backpackItem.exists).ok()
  })

test ('Checkout continue providing information', async t =>{
    await t.click(CartPage.checkoutButton)
    await t.typeText(Checkout1Page.firstNameInput, CONTACT_INFO.FIRST_NAME)
    await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)
})

test ('Checkout cannot continue without providing information', async t =>{
    await t.click(CartPage.checkoutButton)
    await Checkout1Page.submitCheckoutInfo(CONTACT_INFO.LAST_NAME, CONTACT_INFO.ZIP)
    await t.expect(Checkout1Page.erroMessage.exists).ok()
})
