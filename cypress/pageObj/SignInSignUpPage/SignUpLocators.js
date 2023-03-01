class SignUpLocators {
    constructor() {
        this.first_Name_Input = '//input[@id="register.firstName"]';
        this.last_Name_Input = '//input[@id="register.lastName"]';
        this.email_input = '//input[@id="register.email"]';
        this.password_input = '//input[@id="password"]';
        this.register_checkPwd = '//input[@id="register.checkPwd"]';
        this.checkbox_confirmation = '//*[@id="registerChkTermsConditions"]';
        this.registrationBtn = '//*[@id="registerForm"]/div[11]/button';
        this.errorMessage = '//*[@id="email.errors"]';

    }

}
module.exports = new SignUpLocators()