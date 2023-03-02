const Base = require('../Base')
const signInLocators = require('.//SignInLocators')

class SignInPage extends Base {

    SignIn(email, password,) {
        this.typeTxt(signInLocators.logIn_email_input, email);
        this.typeTxt(signInLocators.logIn_password_input, password);
        this.clickOnBtn(signInLocators.logIn_button);

    }



}

module.exports = new SignInPage()