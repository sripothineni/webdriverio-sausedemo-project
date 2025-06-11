import BasePage from './BasePage';

export default class CheckoutCompletePage extends BasePage {
  private get titleCheckoutComplete(): string {
    return '.title';
  }

  private get lblSuccessMessage(): string {
    return '.complete-header';
  }
  private get btnBackToHome(): string {
    return '#back-to-products';
  }

  async isLoaded(titleText: string): Promise<boolean> {
    if ((await this.getText(this.titleCheckoutComplete)) === titleText) {
      return true;
    } else return false;
  }

  async getSuccessHeaderMessage(): Promise<string> {
    return await this.getText(this.lblSuccessMessage);
  }

  async clickOnBackToHome(): Promise<void> {
    this.click(this.btnBackToHome);
  }
}
