import BasePage from './BasePage';

/**
 * Login page object
 * TODO: Candidate should implement this page object
 */
export default class LoginPage extends BasePage {
  // TODO: Define selectors for username, password, login button, and error message

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
    throw new Error('Method not implemented');
  }

  /**
   * Gets the error message text
   * @returns Error message text
   * TODO: Implement this method
   */
  async getErrorMessage(): Promise<string> {
    // TODO: Implement getting error message
    throw new Error('Method not implemented');
  }
}
