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
  specs: ['./test/specs/**/*.ts'],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--window-size=1920,1080']
      }
    }
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'info',
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
        disableWebdriverScreenshotsReporting: false
      }
    ]
  ],

  //
  // Options to be passed to Mocha.
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
