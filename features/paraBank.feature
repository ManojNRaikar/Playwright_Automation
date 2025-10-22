Feature: ParaBank Online Banking - Fund Transfer

  @Regression @smoke
  Scenario: Verify user can login, transfer funds and see transaction
    Given User navigates to ParaBank login page
    When User logs in with username and password
    Then User should see the account overview page
    When User transfers 100 from account 13344 to account 13344
    Then Transfer confirmation message should appear
    Then User logs out successfully
