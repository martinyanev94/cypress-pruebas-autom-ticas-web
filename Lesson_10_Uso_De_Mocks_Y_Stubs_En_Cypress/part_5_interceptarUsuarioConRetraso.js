cy.intercept('GET', '/api/usuario', (req) => {
    req.reply((res) => {
        res.delay(500).send({
            id: 1,
            nombre: 'Juan Pérez',
            correo: 'juan@example.com'
        });
    });
}).as('getUsuarioConDelay');
