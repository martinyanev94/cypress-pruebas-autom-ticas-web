cy.intercept('GET', '/api/endpoint', {
  statusCode: 200,
  body: { data: 'Datos de prueba' },
}).as('getTestData');

cy.visit('/mi-pagina');
cy.wait('@getTestData').its('response.statusCode').should('be.equal', 200);
