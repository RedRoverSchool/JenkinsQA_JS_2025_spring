const { defineConfig } = require("cypress");
const { allureCypress } = require('allure-cypress/reporter');
const os = require('os');
const cypressSplit = require('cypress-split');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  chromeWebSecurity: false,
  requestTimeout: 7000,
  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, config, {
        resultsDir: 'allure-results',
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version
        }
      });
      cypressSplit(on, config);
      return config
    },
  },
});
