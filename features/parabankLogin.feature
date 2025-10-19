Feature: parabank Applocation Login

@Regression
  Scenario: Login to parabank application
    Given I login to the parabank application
    When I enter valid credentials
    And click on login button
    Then I should be logged in successfully
    And I should see the Welcome message with username "Welcome Test1 demo1"


    # Scenario: Login to a
