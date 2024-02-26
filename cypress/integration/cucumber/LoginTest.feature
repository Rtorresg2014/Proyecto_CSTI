Feature: I want to login into the site

  Background: Navigate to the Website
    Given I navigate to the the platform

  Scenario: Login as new sign up user with valid data
    When I entered my email and password
      | email                  | password |
      | rtorresg2014@gmail.com  | peru123  |
    And User click on sign in button
    Then Validate the Login as button after login

  Scenario: Login as new sign up user with invalid data
    When I entered my email and password
      | email                  | password |
      | rtorresg2014@gmail.com  | japon123        |
    And User click on sign in button
    Then Validate the validation message is displayed