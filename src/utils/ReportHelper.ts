/**
 * Helper utility for Allure reporting
 */
export default class ReportHelper {
  /**
   * Adds a step to the Allure report
   * @param name Step name
   * @param status Step status (passed, failed, broken, skipped)
   */
  static addStep(
    name: string,
    status: 'passed' | 'failed' | 'broken' | 'skipped' = 'passed'
  ): void {
    if (
      (browser as any).options?.reporters &&
      (browser as any).options.reporters.some(
        (reporter: unknown[]) => Array.isArray(reporter) && reporter[0] === 'allure'
      )
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const allure = (browser as any).addStep ? (browser as any) : (browser as any).allure;
      if (allure && allure.addStep) {
        allure.addStep(name, {}, status);
      }
    }
  }

  /**
   * Adds an attachment to the Allure report
   * @param name Attachment name
   * @param content Attachment content
   * @param type Attachment MIME type
   */
  static addAttachment(name: string, content: string | Buffer, type: string): void {
    if (
      (browser as any).options?.reporters &&
      (browser as any).options.reporters.some(
        (reporter: unknown[]) => Array.isArray(reporter) && reporter[0] === 'allure'
      )
    ) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const allure = (browser as any).addAttachment ? (browser as any) : (browser as any).allure;
      if (allure && allure.addAttachment) {
        allure.addAttachment(name, content, type);
      }
    }
  }

  /**
   * Takes a screenshot and adds it to the Allure report
   * @param name Screenshot name
   */
  static async takeScreenshot(name = 'Screenshot'): Promise<void> {
    try {
      const screenshot = await browser.takeScreenshot();
      this.addAttachment(name, Buffer.from(screenshot, 'base64'), 'image/png');
    } catch (error) {
      console.error('Failed to take screenshot:', error);
    }
  }

  /**
   * Adds browser console logs to the Allure report
   * @param name Log name
   */
  static async addConsoleLogs(name = 'Browser Console Logs'): Promise<void> {
    try {
      const logs = await browser.getLogs('browser');
      if (logs && logs.length > 0) {
        // Type assertion needed because browser.getLogs returns object[] type
        const logContent = logs
          .map(log => {
            // Cast log to any to access properties
            const logEntry = log as any;
            return `[${logEntry.level}] ${logEntry.message}`;
          })
          .join('\n');
        this.addAttachment(name, logContent, 'text/plain');
      }
    } catch (error) {
      console.error('Failed to get console logs:', error);
    }
  }
}
