import { expect, Page } from '@playwright/test';

export class HomePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url); 
  }

  async validateHomepage() {
    await expect(this.page.locator('text=Phones')).toBeVisible();
    await expect(this.page.locator('text=Laptops')).toBeVisible();
    await expect(this.page.locator('text=Monitors')).toBeVisible();
  }

  async clickCategory(category: string) {
    await this.page.locator(`text=${category}`).click();
  }
}
