import LoginPage from '../../src/pages/LoginPage';
import InventoryPage from '../../src/pages/InventoryPage';
// TestData is used in commented code examples
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import TestData from '../../src/utils/TestData';
import ReportHelper from '../../src/utils/ReportHelper';

describe('Login functionality', () => {
  let loginPage: LoginPage;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let inventoryPage: InventoryPage;

  beforeEach(async () => {
    loginPage = new LoginPage();
    inventoryPage = new InventoryPage();
    await loginPage.open();
  });

  it('should login with valid credentials', async () => {
    // TODO: Implement test for successful login
    // Example with Allure reporting:
    ReportHelper.addStep('Attempting login with standard user');
    // 1. Login with standard user credentials
    // await loginPage.login(TestData.STANDARD_USER.username, TestData.STANDARD_USER.password);

    // 2. Verify that the inventory page is loaded
    // const isLoaded = await inventoryPage.isLoaded();
    // expect(isLoaded).toBe(true);

    // Take a screenshot for the report
    // await ReportHelper.takeScreenshot('After successful login');
  });

  it('should show error message with invalid credentials', async () => {
    // TODO: Implement test for failed login
    // Example with Allure reporting:
    ReportHelper.addStep('Attempting login with invalid credentials');
    // 1. Login with invalid credentials
    // await loginPage.login(TestData.INVALID_USER.username, TestData.INVALID_USER.password);

    // 2. Verify that the error message is displayed
    // const errorMessage = await loginPage.getErrorMessage();
    // expect(errorMessage).toContain('Username and password do not match');

    // Add the error message to the report
    // ReportHelper.addAttachment('Error message', errorMessage, 'text/plain');
    // await ReportHelper.takeScreenshot('Login error');
  });

  it('should show error message for locked out user', async () => {
    // TODO: Implement test for locked out user
    // 1. Login with locked out user credentials
    // 2. Verify that the appropriate error message is displayed
  });
});
