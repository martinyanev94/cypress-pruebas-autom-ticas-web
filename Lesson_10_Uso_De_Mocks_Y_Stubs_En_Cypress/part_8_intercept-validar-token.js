cy.intercept('POST', '/api/validar-token', {
    statusCode: 200,
    body: {
        valido: true,
        usuario: 'Juan Pérez'
    }
}).as('validarToken');
