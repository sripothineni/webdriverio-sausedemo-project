import BasePage from './BasePage';

/**
 * Inventory page object
 * TODO: Candidate should implement this page object
 */
export default class InventoryPage extends BasePage {
  // Locators
  private get lblProducts(): string {
    return '.title';
  }
  private get BtnCarticon(): string {
    return '.shopping_cart_link';
  }
  private get inventoryItems(): string {
    return '.inventory_item';
  }
  private get cartBadge(): string {
    return '.shopping_cart_badge';
  }

  /**
   * Checks if the page is loaded
   * @returns True if the page is loaded
   * TODO: Implement this method
   */
  async isLoaded(): Promise<boolean> {
    return await this.waitForDisplayed(this.lblProducts);
  }

  /**
   * Adds an item to the cart by its name
   * @param itemName Name of the item to add
   */
  async addItemToCart(itemName: string): Promise<void> {
    try {
      // Get all product containers on the page
      const productContainers = await $$(this.inventoryItems);

      for (const product of productContainers) {
        // Locate the product name element inside the current product container
        const nameElement = await product.$('[data-test="inventory-item-name"]');
        const nameText = await nameElement.getText();

        // Check if the product name matches with the given itemName
        if (nameText.trim() === itemName) {
          const AddorRemoveFromCartButton = await product.$('button.btn_inventory');
          const buttonText = await AddorRemoveFromCartButton.getText();

          // Only click if the button has "Add to cart" text
          if (buttonText.trim().toLowerCase() === 'add to cart') {
            await AddorRemoveFromCartButton.click();
            console.log(`Item "${itemName}" added to cart.`);
          } else {
            console.log(`Item "${itemName}" is already in the cart. Skipping click.`);
          }
          return;
        }
      }
    } catch (error) {
      console.error(`Error while adding item "${itemName}" to cart:`, error);
    }
  }

  /**
   * Gets the number of items in the cart
   * @returns Number of items in the cart
   */
  async getCartItemCount(): Promise<string> {
    return await this.getText(this.cartBadge);
  }

  /**
   * Navigates to the cart page
   */
  async goToCart(): Promise<void> {
    await this.click(this.BtnCarticon);
  }
}
