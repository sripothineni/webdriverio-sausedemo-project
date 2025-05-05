import LoginPage from '../../src/pages/LoginPage';
import InventoryPage from '../../src/pages/InventoryPage';
import CartPage from '../../src/pages/CartPage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TestData from '../../src/utils/TestData';

describe('Shopping cart functionality', () => {
  let loginPage: LoginPage;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let inventoryPage: InventoryPage;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let cartPage: CartPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    cartPage = new CartPage();

    // Login before each test - commented out as these are placeholder methods
    // that the candidate needs to implement
    await loginPage.open();
    // await loginPage.login(TestData.STANDARD_USER.username, TestData.STANDARD_USER.password);
    // await expect(inventoryPage.isLoaded()).resolves.toBe(true);

    // Skip test setup for now as this is just a template
    // The candidate will implement these methods
  });

  it('should add an item to the cart', async () => {
    // TODO: Implement test for adding item to cart
    // 1. Add a specific item to the cart
    // 2. Verify that the cart badge shows the correct count
  });

  it('should display the correct items in the cart', async () => {
    // TODO: Implement test for viewing cart contents
    // 1. Add specific items to the cart
    // 2. Navigate to the cart page
    // 3. Verify that the cart contains the correct items
  });

  it('should remove an item from the cart', async () => {
    // TODO: Implement test for removing item from cart
    // 1. Add items to the cart
    // 2. Navigate to the cart page
    // 3. Remove a specific item
    // 4. Verify that the item is no longer in the cart
  });
});
