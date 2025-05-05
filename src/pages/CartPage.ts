import BasePage from './BasePage';

/**
 * Cart page object
 * TODO: Candidate should implement this page object
 */
export default class CartPage extends BasePage {
  // TODO: Define selectors for cart items, checkout button, etc.

  /**
   * Checks if the page is loaded
   * @returns True if the page is loaded
   * TODO: Implement this method
   */
  async isLoaded(): Promise<boolean> {
    // TODO: Implement check if cart page is loaded
    throw new Error('Method not implemented');
  }

  /**
   * Gets the list of items in the cart
   * @returns Array of item names in the cart
   * TODO: Implement this method
   */
  async getCartItems(): Promise<string[]> {
    // TODO: Implement getting cart items
    throw new Error('Method not implemented');
  }

  /**
   * Removes an item from the cart by its name
   * @param itemName Name of the item to remove
   * TODO: Implement this method
   */
  async removeItem(itemName: string): Promise<void> {
    // TODO: Implement removing item from cart
    throw new Error('Method not implemented');
  }

  /**
   * Proceeds to checkout
   * TODO: Implement this method
   */
  async checkout(): Promise<void> {
    // TODO: Implement checkout
    throw new Error('Method not implemented');
  }
}
