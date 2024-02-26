const { homePageTitle } = require("../../../utils/constants");

class HomePage {
    
    elements = {
        homePageTitle: () => cy.get('.item.active .col-sm-6 h2'),
    };

    navigateToWebsite() {
        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.visit("/");
        this.elements.homePageTitle().should('have.text', homePageTitle)
    }
}

module.exports = new HomePage();