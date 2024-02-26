class MenuPage{
    elements = {
        loginLink: () => cy.get(".shop-menu ul li a[href*='login']"),
    };

    navigateToLogin(){
        this.elements.loginLink().should('be.visible').click();
    } 
}

module.exports = new MenuPage();