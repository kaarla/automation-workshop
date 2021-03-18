import {Selector, t} from 'testcafe'

class CartPage {
  constructor() {
    this.pageTitle = Selector('#contents_wrapper > div.subheader').withText('Cart')
    this.cartList = Selector('#cart_contents_container > div > div.cart_list')
    this.backpackItem = this.cartList.child().withText('Backpack')
    this.bikeItem = this.cartList.child().withText('Bike')
    this.checkoutButton = Selector('.btn_action.checkout_button')
  }
}

export default new CartPage()
