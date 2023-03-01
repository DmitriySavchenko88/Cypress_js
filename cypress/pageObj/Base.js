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
    clickOnBtn(xpath){
        return cy.xpath(xpath).click()
    }

}

module.exports =  Base