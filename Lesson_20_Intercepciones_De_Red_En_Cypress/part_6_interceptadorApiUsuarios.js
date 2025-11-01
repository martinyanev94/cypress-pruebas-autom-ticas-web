let callCount = 0;

cy.intercept('GET', '/api/usuarios', (req) => {
    if (callCount === 0) {
        req.reply({
            statusCode: 200,
            body: [{ id: 1, name: 'Juan Pérez' }]
        });
    } else {
        req.reply({
            statusCode: 500,
            body: { message: 'Error del servidor' }
        });
    }
    callCount++;
}).as('getUsuarios');
