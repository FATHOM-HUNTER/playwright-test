import { test, Page } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Homepage Tests', () => {
  const baseUrl = 'https://www.demoblaze.com';  

  test('Validate Homepage', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate(baseUrl);  
    await homePage.validateHomepage();  
  });

  test('Verify Categories', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.navigate(baseUrl);
    await homePage.validateHomepage(); 
    await homePage.clickCategory('Phones'); 
      });
});
