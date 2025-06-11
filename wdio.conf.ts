import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  //
  // ====================
  // Runner Configuration
  // ====================
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true
    }
  },

  //
  // ==================
  // Specify Test Files
  // ==================
  specs: ['./test/specs/**/*.spec.ts'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 10,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        //args: ['--headless', '--disable-gpu', '--window-size=1920,1080'],
        args: ['--disable-gpu', '--window-size=1920,1080'],
        prefs: {
          // Disable password manager
          'credentials_enable_service': false,
          'profile.password_manager_enabled': false,
          'profile.password_manager_leak_detection': false
        }
      }
    }
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',
  bail: 0,
  baseUrl: 'https://www.saucedemo.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  framework: 'mocha',
  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
        addConsoleLogs: true,
        reportedEnvironmentVars: {
          Browser: 'Chrome',
          Platform: process.platform
        }
      }
    ]
  ],

  //
  // Options to be passed to Mocha.
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
    grep: process.env.npm_config_grep
  }
};
