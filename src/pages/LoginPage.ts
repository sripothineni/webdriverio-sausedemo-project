import BasePage from './BasePage';

/**
 * Login page object
 * TODO: Candidate should implement this page object
 */
export default class LoginPage extends BasePage {
  // TODO: Define selectors for username, password, login button, and error message

  private get inputUsername(): string {
    return '#user-name';
  }
  private get inputPassword(): string {
    return '#password';
  }
  private get btnLogin(): string {
    return '#login-button';
  }
  private get containerErrorMessage(): string {
    return '.error-message-container >h3';
  }

  /**
   * Opens the login page
   */
  async open(): Promise<void> {
    await super.open('/');
  }

  /**
   * Login with the given credentials
   * @param username Username
   * @param password Password
   * TODO: Implement this method
   */
  async login(username: string, password: string): Promise<void> {
    // TODO: Implement login functionality
    await this.setValue(this.inputUsername, username);
    await this.setValue(this.inputPassword, password);
    await this.click(this.btnLogin);
  }

  /**
   * Gets the error message text
   * @returns Error message text
   * TODO: Implement this method
   */
  async getErrorMessage(): Promise<string> {
    return await this.getText(this.containerErrorMessage);
  }
}
