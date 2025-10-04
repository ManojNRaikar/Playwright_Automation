import { createBdd } from "playwright-bdd";
import { test } from "./fixtures";

export const { Given, When, Then } = createBdd(test);
