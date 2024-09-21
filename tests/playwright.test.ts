import {test, expect} from "@playwright/test";
import { chromium, Browser, Page } from 'playwright';

let browser: Browser;

test ('Mon premier test', async({page}) => {

await page.goto('https://playwright.dev/')
await expect(page).toHaveTitle(/Playwright/)
//await page.pause();
page.locator('text=Get Started').first().click();
//await page.getByRole('link', { name: 'Get started' }).click();
await page.getByRole('link', { name: 'Writing tests', exact: true }).click();
await page.getByRole('link', { name: 'How to write the first test' }).click();

const firstCellLink = page.locator('table tr:first-of-type td:first-of-type a[href="/docs/api/class-locator#locator-check"]');

await expect(firstCellLink).toHaveText('locator.check()'); // Vérifie que le lien a le texte attendu
await page.pause();
//await browser.close();
});
