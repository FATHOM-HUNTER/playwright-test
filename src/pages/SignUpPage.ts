import { expect, Page } from '@playwright/test';

export class SignUpPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async signUp(username: string, password: string) {
    await this.page.locator('//*[@id="sign-username"]').fill(username);
    await this.page.locator('//*[@id="sign-password"]').fill(password);
    await this.page.locator('button:has-text("Sign up")').click();
  }

  async validateSignUpSuccess() {
    await expect(this.page.locator('text=Sign up successful')).toBeVisible();
  }

  async validateUserExists() {
    await expect(this.page.locator('text=This user already exists')).toBeVisible();
  }
}
