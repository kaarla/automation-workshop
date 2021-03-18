import {Selector} from 'testcafe'

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#inventory_filter_container > div')
    this.cartButton = Selector('#shopping_cart_container > a > svg')
    this.oneElement = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
    this.burgerButton = Selector('#react-burger-menu-btn')
    this.logoutOption = Selector('#logout_sidebar_link')
  }
}

export default new InventoryPage()
