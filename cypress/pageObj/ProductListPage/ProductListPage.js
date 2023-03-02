const Base = require('../Base')
const productListPageLocators = require('.//ProductListPageLocators')

class ProductListPage extends Base {
    addToCartItem(){
        this.clickOnBtn(productListPageLocators.addToCartBtn).click({force:true})
    }

}
module.exports = new ProductListPage();