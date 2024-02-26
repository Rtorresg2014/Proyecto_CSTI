/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import loginPage from "../pages/loginPage";
import homePage from "../pages/homePage";
import menuPage from "../pages/shared/menuPage";
import { invalidLoginMessage } from "../../../utils/constants";
        
    Given("I navigate to the the platform", () => {
        homePage.navigateToWebsite();
    });

    When("I entered my email and password", (datatable) => {
        datatable.hashes().forEach((element) => {
            menuPage.navigateToLogin();
            loginPage.doLogin(element.email, element.password)
        });
    });
  
    And("User click on sign in button", () => {
        loginPage.clickOnLogin();
    });
    
    Then("Validate the Login as button after login", () => {
        loginPage.elements.loggedAs().should('be.visible');
    });

    Then("Validate the validation message is displayed", () => {
        loginPage.elements.invalidLoginMessage().should('have.text', invalidLoginMessage);
    });