class SignInLocators {
    constructor() {
        this.logIn_email_input = '//*[@id="j_username"]';
        this.logIn_password_input = '//*[@id="j_password"]';
        this.logIn_button = '//button[@class=\'btn btn-primary btn-block\']';

    }
}


module.exports = new SignInLocators()