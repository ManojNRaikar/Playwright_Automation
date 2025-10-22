Feature: parabank Applocation Login

@Regression @smoke
  Scenario: Login to parabank application
    Given I login to the parabank application
    When I enter valid credentials
    And click on login button
    Then I should be logged in successfully
