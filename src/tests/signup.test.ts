import { test, expect } from '@playwright/test';
import { SignUpPage } from '../pages/SignUpPage';


test.describe('SignUp Tests', () => {
  const username = 'testuser';  
  const password = 'testpass123'; 

  test('Sign up with valid credentials', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.signUp(username, password); 
    await signUpPage.validateSignUpSuccess(); 
  });

  test('Sign up with existing username', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    await signUpPage.signUp(username, password);
    await signUpPage.validateUserExists(); 
  });
});
