import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

type UIFixtures = {
    loginPage:LoginPage;
}

export const test = base.extend<UIFixtures>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
})

export const expect = test.expect;


