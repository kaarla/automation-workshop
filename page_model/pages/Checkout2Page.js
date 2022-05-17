import {Selector, t} from 'testcafe'

class Checkout2Page {
  constructor() {
    this.pageTitle = Selector("#header_container > div.header_secondary_container > span").withText('OVERVIEW')
    this.cartList = Selector('#checkout_summary_container > div > div.cart_list')
    this.backpackItem = this.cartList.child().withText('Backpack')
    this.finishButton = Selector('button#finish.btn.btn_action.btn_medium.cart_button')
  }
}

export default new Checkout2Page()
