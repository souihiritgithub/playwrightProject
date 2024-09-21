// tests/step_definitions/homepage.steps.ts

import { Given, Then } from '@cucumber/cucumber';
import { HomePage } from '../../pages/HomePage';
import { expect } from '@playwright/test';

let homePage: HomePage;

Given('I navigate to the Playwright homepage', async function () {
  homePage = new HomePage(this.page);
  await homePage.goto();
});

Then('I expect the title to contain {string}', async function (expectedTitle: string) {
  const title = await homePage.getTitle();
  expect(title).toContain(expectedTitle);
});
