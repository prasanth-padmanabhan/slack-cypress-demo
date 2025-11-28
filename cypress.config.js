const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "j1mt7o",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
