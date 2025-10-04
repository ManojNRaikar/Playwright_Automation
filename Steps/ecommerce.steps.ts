import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';

const { Given, When, Then } = createBdd();

Given('I login to the demo store', async ({}) => {
  // Step: Given I login to the demo store
  // From: features\ecommerce.feature:4:5
});

Then('I should be logged in successfully', async ({}) => {
  
});

