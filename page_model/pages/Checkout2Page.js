import {Selector, t} from 'testcafe'

class Checkout2Page {
  constructor() {
    this.pageTitle = Selector('#contents_wrapper > div.subheader').withText('Overview')
    this.cartList = Selector('#checkout_summary_container > div > div.cart_list')
    this.backpackItem = this.cartList.child().withText('Backpack')
    this.finishButton = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button')
  }
}

export default new Checkout2Page()
