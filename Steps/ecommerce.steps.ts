import { Given, When, Then} from "./world.ts";
import { expect } from "@playwright/test";


Given('I login to the demo store', async ({page}) => {
  await page.goto(process.env.Base_URL!);
});
When('I enter valid credentials', async ({}) => {
  
});

Then('I should be logged in successfully', async ({}) => {
  
});

