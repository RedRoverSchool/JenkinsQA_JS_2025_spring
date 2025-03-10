const USERNAME = Cypress.env('local.admin.username');
const PASSWORD = Cypress.env('local.admin.password');

beforeEach(() => {
   cy.cleanData(null, true);
   cy.login(USERNAME, PASSWORD);
});