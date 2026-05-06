// @ts-check
import { test, expect } from '@playwright/test';

test('TC001 - Verify successful registration with all valid inputs', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('password').fill('Test@1234');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-success')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
});
test('TC002 - Verify error when all fields are empty and Submit is clicked', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
test('TC003 - Verify error when Email field is empty', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('password').fill('Test@1234');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
test('TC004 - Verify error when Password field is empty', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
test('TC005 - Verify error when Name field is empty', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('password').fill('Test@1234');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
test('TC006 - Verify error when Gender is not selected', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('password').fill('Test@1234');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
// test('TC007 - Verify error when Email format is invalid — missing @', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('testuserATgmail.com');
//   await page.getByTestId('password').fill('Test@1234');
//   await page.getByTestId('name').fill('John Doe');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   await expect(page.locator('.alert.alert-danger')).toBeVisible();
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
// });
// test('TC008 - Verify error when Email has no domain — missing .com', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('testuser@email.com');
//   await page.getByTestId('password').fill('Test@1234');
//   await page.getByTestId('name').fill('John Doe');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });
test('TC009 - Verify error when Password is too short', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('password').fill('A');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
test('TC010 - Verify error when already registered Email is used', async ({ page }) => {
  await page.goto('https://web-demo.qahive.com/e-commerce/register');
  await page.getByTestId('loginLink').click();
  await page.getByTestId('email').fill('testuser@email.com');
  await page.getByTestId('password').fill('Test@1234');
  await page.getByTestId('name').fill('John Doe');
  await page.getByTestId('male').click();
  await page.getByTestId('submit').click();
  await expect(page.locator('.alert.alert-danger')).toBeVisible();
  await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/register');
});
// test('TC011', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('BZBZ@gmail.com');
//   await page.getByTestId('password').fill('demo123');
//   await page.getByTestId('name').fill('dea mo');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });
// test('TC012', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('BZBZ@gmail.com');
//   await page.getByTestId('password').fill('demo123');
//   await page.getByTestId('name').fill('dea mo');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });
// test('TC013', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('BZBZ@gmail.com');
//   await page.getByTestId('password').fill('demo123');
//   await page.getByTestId('name').fill('dea mo');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });
// test('TC014', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('BZBZ@gmail.com');
//   await page.getByTestId('password').fill('demo123');
//   await page.getByTestId('name').fill('dea mo');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });
// test('TC015', async ({ page }) => {
//   await page.goto('https://web-demo.qahive.com/e-commerce/register');
//   await page.getByTestId('loginLink').click();
//   await page.getByTestId('email').fill('BZBZ@gmail.com');
//   await page.getByTestId('password').fill('demo123');
//   await page.getByTestId('name').fill('dea mo');
//   await page.getByTestId('male').click();
//   await page.getByTestId('submit').click();
//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveURL('https://web-demo.qahive.com/e-commerce/product-list');
// });


