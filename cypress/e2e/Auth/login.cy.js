import HomePage from '../../Pages/HomePage';
import LoginPage from '../../Pages/LoginPage';

describe("Login Test", () => {
    it("should open homepage and click login", () => {
        HomePage.open();
        HomePage.clickLogin();

        cy.fixture('user').then((user) => {
            cy.ixture('loginUser').then((loginUser) => {

                LoginPage.enterEmail(loginUser.email);
                LoginPage.enterPassword(user.password);
                LoginPage.clickLoginButton();

                LoginPage.verifyLoginSuccess();

                LoginPage.verifyDeleteAccountButton();

                cy.url().should('eq', Cypress.config('baseUrl') + '/');
            });
        });


    });
});