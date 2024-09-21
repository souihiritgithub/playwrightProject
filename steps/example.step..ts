import { Given, Then } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;
let page: Page;

Given('I navigate to the Playwright homepage', async function () {
  // Lance le navigateur
  browser = await chromium.launch();
  // Ouvre un nouvel onglet
  page = await browser.newPage();
  // Navigue vers la page d'accueil de Playwright
  await page.goto('https://playwright.dev/');
});

Then('I expect the title to contain {string}', async function (expectedTitle: string) {
  // Récupère le titre de la page
  const title = await page.title();
  // Vérifie que le titre contient le texte attendu
  if (!title.includes(expectedTitle)) {
    throw new Error(`Expected title to contain "${expectedTitle}" but it was "${title}"`);
  }
  // Ferme le navigateur
  await page.pause();
  await browser.close();
});