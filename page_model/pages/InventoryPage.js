import {Selector} from 'testcafe'

class InventoryPage {
  constructor() {
    this.pageTitle = Selector('#header_container > div.header_secondary_container > span').withText('PRODUCTS')
    this.cartButton = Selector('#shopping_cart_container')
    this.burgerButton = Selector('#react-burger-menu-btn')
    this.logoutOption = Selector('#logout_sidebar_link')
    this.inventoryList = Selector('#inventory_container')
    this.itemBackpackButton = this.inventoryList.child().withText('Backpack').find('button')
    this.itemBikeButton = this.inventoryList.child().withText('Bike').find('button')
  }
}

export default new InventoryPage()
