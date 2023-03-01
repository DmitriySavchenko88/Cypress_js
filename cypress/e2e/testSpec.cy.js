
const mainPage = require('../pageObj/MainPage/MainPage')
const signInUp = require('../pageObj/SignInSignUpPage/SignInUp')
const {randomWord} = require("../support/randomData");

describe('Checking registration to the system', () => {
    beforeEach(() => {
        mainPage.visitMainPage()
        mainPage.clickOnRegistrationBtn()

    })
    it('Check registration with valid data', () => {

signInUp.CreateANewUser('Dima' , 'Savchenko', `${randomWord}.kramarov@mail.com`, 471666, 471666)

    })



})


