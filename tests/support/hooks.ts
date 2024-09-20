import { Before, After } from '@cucumber/cucumber';
import { chromium, Browser, Page } from '@playwright/test';

let browser: Browser;
let page: Page;

Before(async function () {
  browser = await chromium.launch({ headless: false }); // Lancer le navigateur en mode visible
  const context = await browser.newContext();
  page = await context.newPage();
  this.page = page; // Stocker la page dans le contexte de Cucumber
});

After(async function () {
  await browser.close(); // Fermer le navigateur après chaque scénario
});
