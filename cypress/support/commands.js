// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const PORT = Cypress.env('local.port')
const HOST = Cypress.env('local.host')
const USER_NAME = Cypress.env('local.admin.username')
const PASSWORD = Cypress.env('local.admin.password')

/**
 * Logs in to the application with the provided credentials.
 *
 * @param {string} [userName=USERNAME] - The username to use for login.
 * @param {string} [pass=PASSWORD] - The password to use for login.
 *
 * @example
 * cy.login('myuser', 'mypassword')
 */
Cypress.Commands.add('login', (userName = USERNAME, pass = PASSWORD) => {
  cy.intercept('POST', '/j_spring_security_check').as('security_check')

  cy.visit(`http://${HOST}:${PORT}/login`)
  cy.get('#j_username').type(userName)
  cy.get('input[name="j_password"]').type(pass)
  cy.get('button[name="Submit"]').click()
  cy.wait('@security_check')
})