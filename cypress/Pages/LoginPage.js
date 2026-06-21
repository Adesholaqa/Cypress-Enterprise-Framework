import BasePage from "./BasePage";

class LoginPage extends BasePage {
    loginEmailField = '[data-qa="login-email"]';
    loginPasswordField = '[data-qa="login-password"]';
    loginButton = '[data-qa="login-button"]'

    enterEmail(email) {
        this.type(this.loginEmailField, email);
    }

    enterPassword(password) {
        this.type(this.loginPasswordField, password);
    }

    clickLoginButton() {
        this.click(this.loginButton);
    }

    verifyLoginSuccess() {
        cy.contains('Logout').should('be.visible');
    }

    verifyDeleteAccountButton() {
        cy.contains('Delete Account').should('be.visible')
    }
}

export default new LoginPage();