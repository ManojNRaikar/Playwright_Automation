import { test as base, createBdd } from "playwright-bdd";
import { LoginPage } from "../pages/loginpage";

type UIFixtures = {
    loginPage:LoginPage;
}

export const test = base.extend<UIFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
})
export const { Given,When,Then} = createBdd(test);
