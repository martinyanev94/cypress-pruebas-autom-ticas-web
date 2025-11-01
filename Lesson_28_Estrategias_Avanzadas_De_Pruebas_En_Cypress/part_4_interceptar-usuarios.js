cy.intercept('GET', '/api/users').as('getUsers');

cy.visit('/users');
cy.wait('@getUsers').then((interception) => {
  // Almacenamos la intercepción para usarla más tarde
  const responseBody = interception.response.body;

  // Ahora podemos hacer más aserciones basadas en la respuesta
  cy.get('.user-list').should('have.length', responseBody.length);
});

// Otra aserción usando la respuesta almacenada
assert.isArray(responseBody, 'La respuesta debe ser un array');
