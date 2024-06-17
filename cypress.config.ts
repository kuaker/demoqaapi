import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/results",
    overwrite: false,
    html: false,
    json: true,
  },
  viewportWidth: 1440,
  viewportHeight: 900,
  defaultCommandTimeout: 6000,
  watchForFileChanges: false,
  video: true,
  chromeWebSecurity: false,
  retries: 1,
  downloadsFolder: "cypress/downloads",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // if version not defined, use local
      const version = config.env.version || 'local'
      // load env from json
      config.env = require(`./cypress/config/${version}.json`);
      // change baseUrl
      config.baseUrl = config.env.baseUrl

      require("cypress-mochawesome-reporter/plugin")(on);
      return require("./cypress/plugins/index.js")(on, config);
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    env: {
      commandDelay: 200,
    },
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
