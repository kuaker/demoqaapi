// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
chai.use(require('chai-json-schema'));

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(() => {
    loadRoutes();
});

function loadRoutes() {
    // Fernando Arroupe: This functions will intercept the xhr|fetchs but in this case
    // I added a function to disable the logs.
    // cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
}
