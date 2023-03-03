const Base = require('../Base')
const cartLocators = require('./CartLocators')

class Cart extends Base{
    enterTheQuantityOfGoods(quantity){
        this.typeQuantity(cartLocators.quantityInputField, quantity);

    }


}

module.exports = new Cart();