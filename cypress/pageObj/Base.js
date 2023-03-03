require('cypress-xpath');

class Base {

    getElemByXpath(xpath) {
        return cy.xpath(xpath)
    }

    visitUrl(url) {
        return cy.visit(url)
    }
    typeTxt(xpath, txt){
        return cy.xpath(xpath).click().type(txt)
    }
    typeQuantity(xpath, quantity){
       cy.xpath(xpath).clear().type(quantity)

    }
    clickOnBtn(xpath){
        return cy.xpath(xpath).click()

    }


}

module.exports = Base