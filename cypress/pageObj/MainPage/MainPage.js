const Base = require('../Base')
const mainLoc = require('./MainLocators')
class MainPage extends Base{
visitMainPage(){
    this.visitUrl('https://electronics-2005.aimprosoft.com/electronics/en')
}
clickOnRegistrationBtn(){
    this.getElemByXpath(mainLoc.registration_Btn).click({force:true})
}

}
module.exports = new MainPage()