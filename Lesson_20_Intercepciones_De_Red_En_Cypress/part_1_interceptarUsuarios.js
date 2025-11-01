cy.intercept('GET', '/api/usuarios', {
    statusCode: 200,
    body: [
        { id: 1, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com' },
        { id: 2, name: 'Ana Gómez', email: 'ana.gomez@ejemplo.com' }
    ]
}).as('getUsuarios');
