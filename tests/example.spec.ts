import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage';
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage';




test('Login failed', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.loginForm.login(process.env.USERNAME as string, 'wrong_password');
  expect ((await loginPage.loginForm.getErrors()).trim()).toBe('Username and password do not match any user.');

});

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await loginPage.goto();
  await loginPage.loginForm.login(process.env.USERNAME as string, process.env.PASSWORD as string);

  const inventoryPage = new InventoryPage(page);

  expect(await inventoryPage.header.isLogoVisible()).toBeTruthy();

});

test('Add to cart by index', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await loginPage.goto();
  await loginPage.loginForm.login(process.env.USERNAME as string, process.env.PASSWORD as string);

  const inventoryPage = new InventoryPage(page);

  expect(await inventoryPage.header.isLogoVisible()).toBeTruthy();
  await inventoryPage.products.addToCartByIndex(2);
  await expect.poll(async () =>{
    return await inventoryPage.header.getCartItemCount();
  },
  { timeout: 5000 }
  ).toBe(1);


});

test('Checkout', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await loginPage.goto();
  await loginPage.loginForm.login(process.env.USERNAME as string, process.env.PASSWORD as string);

  const inventoryPage = new InventoryPage(page);

  expect(await inventoryPage.header.isLogoVisible()).toBeTruthy();
  await inventoryPage.products.addToCartByIndex(2);
  await expect.poll(async () =>{
    return await inventoryPage.header.getCartItemCount();
  },
  { timeout: 5000 }
  ).toBe(1);

  await inventoryPage.header.goToCart();

  const cartPage = new CartPage(page);
  await cartPage.items.checkout();

  const stepOne = new CheckoutStepOnePage(page);
  await stepOne.stepOne.submit('test', 'test', '12234')

  const stepTwo = new CheckoutStepTwoPage(page);
  await stepTwo.stepTwo.finish();

  const completeCheckout = new CheckoutCompletePage(page);
  expect(await completeCheckout.getMessage()).toBe("Your order has been placed successfully.");

});

test('Filter products', async ({ page }) => {
  const loginPage = new LoginPage(page);


  await loginPage.goto();
  await loginPage.loginForm.login(process.env.USERNAME as string, process.env.PASSWORD as string);

  const inventoryPage = new InventoryPage(page);

  expect(await inventoryPage.header.isLogoVisible()).toBeTruthy();

  await inventoryPage.products.filterByPrice({minPrice: 35, maxPrice: 50});

  expect(await inventoryPage.products.getProductsCount()).toBe(4);


});



