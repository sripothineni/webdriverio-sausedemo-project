import LoginPage from '../../src/pages/LoginPage';
import InventoryPage from '../../src/pages/InventoryPage';
import CartPage from '../../src/pages/CartPage';
import TestData from '../../src/utils/TestData';

describe('Shopping cart functionality', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;
  let cartPage: CartPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    cartPage = new CartPage();

    // Login before each test
    await loginPage.open();
    await loginPage.login(TestData.STANDARD_USER.username, TestData.STANDARD_USER.password);
    await expect(inventoryPage.isLoaded()).resolves.toBe(true);
  });

  it('should add an item to the cart @regression @smoke', async () => {
    // Add a specific item to the cart
    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    // Verify that the cart badge shows the correct count
    const cartBadge = await inventoryPage.getCartItemCount();
    expect(cartBadge).toBe('1');
  });

  it('should display the correct items in the cart @regression', async () => {
    // Add specific items to the cart
    await inventoryPage.addItemToCart('Sauce Labs Backpack');
    await inventoryPage.addItemToCart('Sauce Labs Bike Light');

    // Navigate to the cart page
    await inventoryPage.goToCart();
    // Verify that the cart contains the correct items
    const cartItems = await cartPage.getCartItems();
    //Remove all old products from the cart
    await cartPage.removeAllItems();
    expect(cartItems).toEqual(['Sauce Labs Backpack', 'Sauce Labs Bike Light']);
  });

  it('should remove an item from the cart @regression @smoke', async () => {
    // Navigate to the cart page
    await inventoryPage.goToCart();
    //Remove all old products from the cart
    await cartPage.removeAllItems();
    // Add item to the cart
    await inventoryPage.addItemToCart('Sauce Labs Backpack');

    // Navigate to the cart page
    await inventoryPage.goToCart();

    // Remove the item
    await cartPage.removeItem('Sauce Labs Backpack @regression');
    // Verify that the item is no longer in the cart
    const cartItems = await cartPage.getCartItems();
    await expect(cartItems).toEqual([]);
  });
});
