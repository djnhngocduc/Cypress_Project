const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
      indexHtmlFile: 'cypress/support/component-index.html'
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'
  },
  projectId: "sdbxxk"
});
