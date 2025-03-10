declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to clean up test data in Jenkins
     * @returns {Promise<void>} - Promise that resolves when all data has been cleaned up
     * @example
     * // Clean up all jobs, views, nodes, users
     * cy.cleanData(null, true);
     */
    cleanData(resources: string[]|null, all: boolean): Promise<void>

    /**
     * Logs in to the application with the provided credentials.
     *
     * @param userName - The username to use for login. Defaults to `USERNAME`.
     * @param pass - The password to use for login. Defaults to `PASSWORD`.
     *
     * @example
     * cy.login('myuser', 'mypassword');
     */
    login(userName?: string, pass?: string): Chainable<void>
  }
}
