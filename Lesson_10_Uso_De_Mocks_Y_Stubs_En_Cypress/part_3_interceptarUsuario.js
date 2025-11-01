cy.intercept('GET', '/api/usuario', {
    statusCode: 200,
    body: {
        id: 1,
        nombre: 'Juan Pérez',
        correo: 'juan@example.com'
    }
}).as('getUsuario');
