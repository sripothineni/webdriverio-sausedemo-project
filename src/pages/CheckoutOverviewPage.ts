import BasePage from './BasePage';

export default class CheckoutOverviewPage extends BasePage {
  private get lblcheckoutOverview(): string {
    return '.title';
  }
  private get cartItems(): string {
    return '.cart_item';
  }
  private get btnFinish(): string {
    return '#finish';
  }

  async isLoaded(titleText: string): Promise<boolean> {
    if ((await this.getText(this.lblcheckoutOverview)) === titleText) {
      return true;
    } else return false;
  }

  async getCartItems(): Promise<string[]> {
    await this.waitForDisplayed(this.cartItems);
    const cartContainers = await $$(this.cartItems);
    const itemsList: string[] = [];

    // Checking if any cart items are found
    if (!cartContainers.length) {
      console.warn('No cart items found.');
      return [];
    }

    for (const cartContainer of cartContainers) {
      const itemText: string = await (await cartContainer.$('.cart_item a')).getText();
      console.log(itemText);
      itemsList.push(itemText);
    }
    return itemsList;
  }

  async clickOnFinish(): Promise<void> {
    this.click(this.btnFinish);
  }
}
