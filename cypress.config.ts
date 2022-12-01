import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'rqttmo',
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  screenshotOnRunFailure: false,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
  env: {
    apiUrl: "https://api.realworld.io",
  },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:4200",
    specPattern: "**/*.cy.{js,jsx,ts,tsx}",
  },
});
