cy.intercept('GET', '/api/usuarios').as('getUsuarios');
cy.visit('/usuarios');
cy.wait('@getUsuarios')
  .its('response.statusCode')
  .should('equal', 200);
