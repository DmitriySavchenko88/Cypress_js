const Base = require('../Base')
const mainLocators = require('./MainLocators')
class MainPage extends Base{
visitMainPage(){
    this.visitUrl('https://electronics-2005.aimprosoft.com/electronics/en')
}
clickOnRegistrationBtn(){
    this.getElemByXpath(mainLocators.registration_Btn).click()

}
productSearch(productName){
    this.typeTxt(mainLocators.search_Input, productName)
}
clickOnProductNameBtn(){
    this.getElemByXpath(mainLocators.digital_cameras_btn).click()
}

}
module.exports = new MainPage()