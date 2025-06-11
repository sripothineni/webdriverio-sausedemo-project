import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  private get tbFirstname(): string {
    return '#first-name';
  }
  private get tbLastname(): string {
    return '#last-name';
  }
  private get tbPostalcode(): string {
    return '#postal-code';
  }

  private get btnContinue(): string {
    return '#continue';
  }

  async fillCheckoutDetails(
    firstname: string,
    lastname: string,
    postalcode: string
  ): Promise<void> {
    await this.setValue(this.tbFirstname, firstname);
    await this.setValue(this.tbLastname, lastname);
    await this.setValue(this.tbPostalcode, postalcode);
  }

  async clickOnContinue(): Promise<void> {
    this.click(this.btnContinue);
  }
}
