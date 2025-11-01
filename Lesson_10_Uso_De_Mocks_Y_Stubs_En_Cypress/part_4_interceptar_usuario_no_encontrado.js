cy.intercept('GET', '/api/usuario', {
    statusCode: 404,
    body: {
        error: 'Usuario no encontrado'
    }
}).as('getUsuario404');
