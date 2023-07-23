const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 2920,
  viewportHeight: 2080,
  pageLoadTimeout: 50000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
