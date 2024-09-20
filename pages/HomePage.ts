// pages/HomePage.ts

import { Page } from 'playwright';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }

  async getTitle() {
    return this.page.title();
  }
}
