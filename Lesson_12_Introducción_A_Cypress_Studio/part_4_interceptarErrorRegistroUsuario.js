cy.intercept('POST', '/api/registro', {
  statusCode: 400,
  body: { error: 'El usuario ya existe' }
}).as('registroFallido');
