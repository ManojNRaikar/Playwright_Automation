Feature: E-commerce Website Testing

  Scenario: Login to store
    Given I login to the demo store
    When I enter valid credentials
    Then I should be logged in successfully

  # Scenario: Add product to cart
  #   Given I login to the demo store
  #   When I add a product "Samsung galaxy s6" to the cart
  #   Then I should see "Samsung galaxy s6" in the cart

  # Scenario: Remove product from cart
  #   Given I login to the demo store
  #   And I add a product "Nokia lumia 1520" to the cart
  #   When I remove the product "Nokia lumia 1520" from the cart
  #   Then I should not see "Nokia lumia 1520" in the cart

  # Scenario: Place an order
  #   Given I login to the demo store
  #   And I add a product "Sony xperia z5" to the cart
  #   When I place an order with name "John Doe" and credit card "123456789012"
  #   Then I should see an order confirmation
