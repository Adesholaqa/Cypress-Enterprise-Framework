import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';

describe("Login Test", () => {
    it("should open homepage and click login", () => {
        HomePage.open();
        HomePage.clickLogin();
        LoginPage.enterEmail('Adeshola@yopmail.com');
        LoginPage.enterPassword('Adeshola1234');
        LoginPage.clickLoginButton();

        LoginPage.verifyLoginSuccess();
        LoginPage.verifyDeleteAccountButton();
        cy.url().should('eq', Cypress.config('baseUrl') + '/');
    });
});