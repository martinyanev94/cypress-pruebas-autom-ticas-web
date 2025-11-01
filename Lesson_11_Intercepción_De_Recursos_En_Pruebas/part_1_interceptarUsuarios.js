cy.intercept('GET', '/api/usuarios', {
    statusCode: 200,
    body: [
        { id: 1, nombre: 'Juan Pérez' },
        { id: 2, nombre: 'Ana García' }
    ]
}).as('obtenerUsuarios');
