import LoginPage from '../../src/pages/LoginPage';
import CartPage from '../../src/pages/CartPage';
import InventoryPage from '../../src/pages/InventoryPage';
import CheckoutPage from '../../src/pages/CheckoutPage';
import CheckoutOverviewPage from '../../src/pages/CheckoutOverviewPage';
import CheckoutCompletePage from '../../src/pages/CheckoutCompletePage';
import TestData from '../../src/utils/TestData';

describe('checkout overview functionality', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let checkoutOverviewPage: CheckoutOverviewPage;
  let checkoutCompletePage: CheckoutCompletePage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    cartPage = new CartPage();
    checkoutPage = new CheckoutPage();
    checkoutOverviewPage = new CheckoutOverviewPage();
    checkoutCompletePage = new CheckoutCompletePage();

    // Login before each test
    await loginPage.open();
    await loginPage.login(TestData.STANDARD_USER.username, TestData.STANDARD_USER.password);
    await expect(inventoryPage.isLoaded()).resolves.toBe(true);
  });

  it('products should match with the cart items @regression', async () => {
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');
    // Navigate to the cart page
    await inventoryPage.goToCart();
    await cartPage.clickOnCheckout();
    await checkoutPage.fillCheckoutDetails('sreenath', 'pothineni', '30655');
    await checkoutPage.clickOnContinue();
    await expect(checkoutOverviewPage.isLoaded('Checkout: Overview')).toBeTruthy();
    const checkoutItems = await checkoutOverviewPage.getCartItems();
    expect(checkoutItems).toEqual(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
    await checkoutOverviewPage.clickOnFinish();
    await expect(checkoutCompletePage.isLoaded('Checkout: Complete!')).toBeTruthy();
    await expect(await checkoutCompletePage.getSuccessHeaderMessage()).toContain(
      'Thank you for your order!'
    );
    await checkoutCompletePage.clickOnBackToHome();
    await expect(await inventoryPage.isLoaded()).toBeTruthy();
  });
});
