import BasePage from './BasePage';

/**
 * Cart page object
 * TODO: Candidate should implement this page object
 */
export default class CartPage extends BasePage {
  // TODO: Define selectors for cart items, checkout button, etc.
  private get lblYourCart(): string {
    return 'span=Your Cart';
  }
  // private get cartItems(): string {
  //   return '.inventory_item_name';
  // }

  private get cartItems(): string {
    return '.cart_item';
  }

  /**
   * Checks if the page is loaded
   * @returns True if the page is loaded
   * TODO: Implement this method
   */
  async isLoaded(): Promise<boolean> {
    return await this.waitForDisplayed(this.lblYourCart);
  }

  /**
   * Gets the list of items in the cart
   * @returns Array of item names in the cart
   */
  async getCartItems(): Promise<string[]> {
    try {
      const cartContainers = await $$(this.cartItems);
      const itemsList: string[] = [];

      // Checking if any cart items are found
      if (!cartContainers.length) {
        console.warn('No cart items found.');
        return [];
      }

      for (const cartContainer of cartContainers) {
        const productNameElement = await cartContainer.$('.inventory_item_name');

        // Ensure the product name element exists and is visible
        if (productNameElement && (await productNameElement.isDisplayed())) {
          const productNameText = await productNameElement.getText();
          itemsList.push(productNameText.trim());
        } else {
          console.warn('Product name is not found or not visible.');
        }
      }
      return itemsList;
    } catch (error) {
      console.error('Error while getting cart items:', error);
      return [];
    }
  }

  /**
   * Removes an item from the cart by its name
   * @param itemName Name of the item to remove
   */
  async removeItem(itemName: string): Promise<void> {
    try {
      // Get all product containers on the cartpage
      const cartContainers = await $$(this.cartItems);
      let itemFound: boolean = false;

      //checking if the cart contains products or not and returning if the cart is empty
      if (!cartContainers.length) {
        console.warn('Cart is empty or cart item elements not found.');
        return;
      }
      //iterating through the cart items
      for (const cartContainer of cartContainers) {
        const productNameElement = await cartContainer.$('.inventory_item_name');
        const productName = await productNameElement.getText();

        //Checking for the product matching with the given itemName
        if (productName.trim() === itemName) {
          itemFound = true;
          (await cartContainer.$('.cart_button')).click();
        }
      }

      //Excecutes when the itemName given is not matching with the products in the cart
      if (!itemFound) {
        console.warn(`Item "${itemName}" not found in the cart.`);
      }
    } catch (error) {
      console.error(`An error occurred while removing item "${itemName}":`, error);
    }
  }

  /**
   * Removes all items from the cart by its name
   */
  async removeAllItems(): Promise<void> {
    // Get all product containers on the cartpage
    const cartContainers = await $$(this.cartItems);

    //checking if the cart contains products or not and returning if the cart is empty
    if (!cartContainers.length) {
      console.warn('Cart is empty or cart item elements not found.');
      return;
    }
    //iterating through the cart items and removing all
    for (const cartContainer of cartContainers) {
      const productNameElement = await cartContainer.$('.inventory_item_name');
      const productName = await productNameElement.getText();
      this.removeItem(productName);
    }
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
