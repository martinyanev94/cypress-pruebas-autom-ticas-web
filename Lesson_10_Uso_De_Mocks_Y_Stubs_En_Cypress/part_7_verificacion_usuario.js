cy.wait('@getUsuario')
  .its('response.statusCode')
  .should('eq', 200);

cy.get('.nombre-usuario')
  .should('contain', 'Juan Pérez');
