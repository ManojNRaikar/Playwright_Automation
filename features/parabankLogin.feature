Feature: parabank Applocation Login

  @Regression @smoke
  Scenario: Login to parabank application
    Given I login to the parabank application
    When I enter valid credentials
    And click on login button
    Then I should be logged in successfully

  @Regression
  Scenario Outline: Login to Parabank with invalid username "<username>" and password "<password>"
    Given I login to the parabank application
    When I enter invalid "<username>" and "<password>"
    And click on login button
    Then I should see error message "Error!"
    And also should see "The username and password could not be verified."

    Examples:
      | username | password  |
      | Test123  | test@344  |
      | Testhifi | test4555# |
      | tEST     | demo      |