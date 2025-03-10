describe('US_001|Create a project', () => {
  it('TC-001-1-A|Create a project via UI', () => {
    cy.get('span').contains('New Item').click()
    cy.wait(5000)
    cy.get('input[name="name"]').clear()
    cy.get('input[name="name"]').type('NewPrj')
    cy.get('span.label').contains('Freestyle project').click()
    cy.get('button').contains('OK').click()
    cy.get('button').contains('Save').click()
    cy.url().should('include', 'NewPrj')
  })
})
