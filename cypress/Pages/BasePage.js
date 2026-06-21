class BasePage {
    visit (path = '/') {
        cy.visit(path);
    }

    click (locator) {
        cy.get(locator).click();
    }

    type (locator,text) {
        cy.get(locator).type(text);
    }

    getElement(locator) {
        return cy.get(locator);
    }

}

export default BasePage;