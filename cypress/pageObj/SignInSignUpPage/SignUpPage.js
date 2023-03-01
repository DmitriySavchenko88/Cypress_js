const Base = require('../Base')
const signUpLocators = require('.//SignUpLocators')

class SignUpPage extends Base {

    CreateANewUser(firstName, lastName, email, password, confirmPassword) {
        this.typeTxt(signUpLocators.first_Name_Input, firstName)
        this.typeTxt(signUpLocators.last_Name_Input, lastName)
        this.typeTxt(signUpLocators.email_input, email)
        this.typeTxt(signUpLocators.password_input, password)
        this.typeTxt(signUpLocators.register_checkPwd, confirmPassword)
        this.clickOnBtn(signUpLocators.checkbox_confirmation)
        this.clickOnBtn(signUpLocators.registrationBtn)


    }


}

module.exports = new SignUpPage()