const Base = require('../Base')
const productListPageLocators = require('.//ProductListPageLocators')

class ProductListPage extends Base {
    addToCartItem() {
        this.clickOnBtn(productListPageLocators.addToCartBtn).click()
    }

    clickOnChekoutBtn() {
        this.clickOnBtn(productListPageLocators.checkOutBtn)


    }
}

module.exports = new ProductListPage();