const Base = require('../Base')
const sigInUpLocators = require('.//SignInUpLocators')

class SignInUp extends Base {

    CreateANewUser(firstName, lastName, email, password, confirmPassword) {
        this.typeTxt(sigInUpLocators.first_Name_Input, firstName)
        this.typeTxt(sigInUpLocators.last_Name_Input, lastName)
        this.typeTxt(sigInUpLocators.email_input, email)
        this.typeTxt(sigInUpLocators.password_input, password)
        this.typeTxt(sigInUpLocators.register_checkPwd, confirmPassword)
        this.clickOnBtn(sigInUpLocators.checkbox_confirmation)
        this.clickOnBtn(sigInUpLocators.registrationBtn)


    }


}

module.exports = new SignInUp()