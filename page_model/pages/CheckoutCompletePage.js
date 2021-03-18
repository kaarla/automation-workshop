import {Selector, t} from 'testcafe'

class CheckoutCompletePage {
  constructor() {
      this.thanksMessage = Selector('#checkout_complete_container > h2').withText("THANK YOU")
      this.thanksImage = Selector('#checkout_complete_container > img')
  }
}

export default new CheckoutCompletePage()
