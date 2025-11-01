cy.intercept('GET', '/api/usuarios', (req) => {
    const id = req.query.id;
    if (id === '1') {
        req.reply({
            statusCode: 200,
            body: { id: 1, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com' }
        });
    } else {
        req.reply({
            statusCode: 404,
            body: { message: 'Usuario no encontrado' }
        });
    }
}).as('getUsuarioPorId');
