Feature: ParaBank Online Banking - Fund Transfer

  @Regression @smoke
  Scenario: Verify user can login, transfer funds and see transaction
    Given User navigates to ParaBank login page
    When User logs in with username "john" and password "demo"
    Then User should see the account overview page
    When User transfers 100 from account 12345 to account 67890
    Then Transfer confirmation message should appear
    And User verifies transaction in recent activity
    Then User logs out successfully
