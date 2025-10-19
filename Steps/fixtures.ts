import { test as base, createBdd } from "playwright-bdd";
// import { LoginPage } from "../pages/loginpage";
import { World } from "./world";

export const test = base.extend<{world:World}>({
    world:async({page},use,testInfo)=>{
        const world = new World(page,testInfo)
        await use(world)
    }
})

export const {Given, When, Then, Before, After, BeforeStep, AfterStep} = createBdd(test,{worldFixture:'world'})

//Use below method for Playwright style stepdefination
// import { test as base, createBdd } from "playwright-bdd";
// import { LoginPage } from "../pages/loginpage";
// type UIFixtures = {
//     loginPage:LoginPage;
// }

// export const test = base.extend<UIFixtures>({
//     loginPage: async ({ page }, use) => {
//         await use(new LoginPage(page));
//     }
// })
// export const { Given,When,Then} = createBdd(test);

