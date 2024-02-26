const { loginPageTitle } = require("../../../utils/constants");

class LoginPage {
    elements = {
        loginPageTitle: () => cy.get('.login-form h2'),
        loginEmailAddress: () => cy.get('[data-qa="login-email"]'),
        loginPassword: () => cy.get('[data-qa="login-password"]'),
        loginSignInButton: () => cy.get('[data-qa="login-button"]'),
        loggedAs: () => cy.contains('a', 'Logged in'),
        invalidLoginMessage: () => cy.get('.login-form p')
    };

    doLogin(email, password) {
        this.elements.loginPageTitle().should("have.text", loginPageTitle);
        this.elements.loginEmailAddress().should('be.visible').type(email);
        this.elements.loginPassword().should('be.visible').type(password);
    }

    clickOnLogin() {
        this.elements.loginSignInButton().should('be.visible').click();
    }
 
}

module.exports = new LoginPage();