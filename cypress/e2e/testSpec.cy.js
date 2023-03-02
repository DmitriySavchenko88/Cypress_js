const mainPage = require('../pageObj/MainPage/MainPage')
const signUp = require('../pageObj/SignInSignUpPage/SignUpPage')
const signIn = require('../pageObj/SignInSignUpPage/SignInPage')
const productListPage = require('../pageObj/ProductListPage/ProductListPage')
const {randomWord} = require("../support/randomData");

describe('Checking new user registration ', () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        mainPage.visitMainPage()
        mainPage.clickOnRegistrationBtn()

    })
    it('Check registration with valid data', () => {

        signUp.CreateANewUser('Dima', 'Savchenko', `${randomWord}.kramarov@mail.com`, 471666, 471666);
        cy.xpath('//button[@class=\'close closeAccAlert\']').should('be.visible');


    })
    it('Check registration with invalid email format', () => {

        signUp.CreateANewUser('Dima', 'Savchenko', `${randomWord}.kramarovcom`, 471666, 471666)
        cy.xpath('//*[@id="email.errors"]').should('have.text', 'Please enter a valid email')


    })

    it('Check registration with less than the allowed number of characters in the password', () => {

        signUp.CreateANewUser('Dima', 'Savchenko', `${randomWord}.kramarovcom`, 47166, 47166)
        cy.xpath('//*[@id="password_minchar"]').should('have.text', 'Minimum length is 6 characters')


    })
    it('Verify that user is able to login', () => {
        signIn.SignIn('stuff_chenko@mail.ua', 471666)
        cy.xpath('//div[@class="myAccountLinksHeader js-myAccount-toggle" ]').should('have.text', 'My Account')

    })
    it('Verify that the item is displayed in the drop-down menu after entering the product name', () => {
        mainPage.productSearch('POWERSHOT A480');
        cy.xpath('//em[@class=\'search-results-highlight\']').should('have.text','PowerShot A480')


    })
})
describe('Checking product list page', () => {
    beforeEach(() => {
        cy.viewport(1440, 900)
        mainPage.visitMainPage()


    })
    it('Verify that the item is displayed in the drop-down menu after entering the product name', () => {
        mainPage.productSearch('POWERSHOT A480');
        cy.xpath('//*[@id="ui-id-1"]').should('have.text', 'PowerShot A480PowerShot A480PowerShot A480PowerShot A480')


    })
})
describe('Checking a product list page', () =>{
    beforeEach(() =>{
        cy.viewport(1440, 900)
        mainPage.visitMainPage()

    })
it('Adding an item to cart from product list page', () =>{

    mainPage.clickOnProductNameBtn();
    productListPage.addToCartItem();
    cy.xpath('//*[@id="cboxTitle"]/div/span/div/div/span').should('have.text', 'Added to Your Shopping Cart')




})




})
