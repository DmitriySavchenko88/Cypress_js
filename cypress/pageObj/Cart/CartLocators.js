class CartLocators {
    constructor() {
        this.quantityInputField = '(//*[@id="quantity_0"])[1]';
        this.itemPrice = '//div[@class="item__price"]';
        this.itemTotal ='//div[@class="item__total js-item-total hidden-xs hidden-sm"]';
    }

}

module.exports = new CartLocators();