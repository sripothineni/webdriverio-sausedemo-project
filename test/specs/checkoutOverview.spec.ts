import LoginPage from '../../src/pages/LoginPage';
import CartPage from '../../src/pages/CartPage';
import InventoryPage from '../../src/pages/InventoryPage';
import CheckoutPage from '../../src/pages/CheckoutPage';
import TestData from '../../src/utils/TestData';
import CheckoutOverviewPage from '../../src/pages/CheckoutOverviewPage';

describe('checkout overview functionality', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;
  let checkoutPage: CheckoutPage;
  let checkoutOverviewPage: CheckoutOverviewPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    cartPage = new CartPage();
    checkoutPage = new CheckoutPage();
    checkoutOverviewPage = new CheckoutOverviewPage();

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
    checkoutOverviewPage.clickOnFinish();
  });
});
