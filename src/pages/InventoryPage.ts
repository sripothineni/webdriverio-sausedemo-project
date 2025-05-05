import BasePage from './BasePage';

/**
 * Inventory page object
 * TODO: Candidate should implement this page object
 */
export default class InventoryPage extends BasePage {
  // TODO: Define selectors for inventory items, add to cart buttons, cart icon, etc.

  /**
   * Checks if the page is loaded
   * @returns True if the page is loaded
   * TODO: Implement this method
   */
  async isLoaded(): Promise<boolean> {
    // TODO: Implement check if inventory page is loaded
    throw new Error('Method not implemented');
  }

  /**
   * Adds an item to the cart by its name
   * @param itemName Name of the item to add
   * TODO: Implement this method
   */
  async addItemToCart(itemName: string): Promise<void> {
    // TODO: Implement adding item to cart
    throw new Error('Method not implemented');
  }

  /**
   * Gets the number of items in the cart
   * @returns Number of items in the cart
   * TODO: Implement this method
   */
  async getCartItemCount(): Promise<number> {
    // TODO: Implement getting cart item count
    throw new Error('Method not implemented');
  }

  /**
   * Navigates to the cart page
   * TODO: Implement this method
   */
  async goToCart(): Promise<void> {
    // TODO: Implement navigation to cart
    throw new Error('Method not implemented');
  }
}
