cy.intercept('GET', '/api/usuarios', (req) => {
    req.reply((res) => {
        res.delay(2000).send({
            statusCode: 200,
            body: [
                { id: 1, nombre: 'Juan Pérez' },
                { id: 2, nombre: 'Ana García' }
            ]
        });
    });
}).as('usuariosConRetraso');
cy.visit('/usuarios'); // Navega a la página de usuarios
cy.get('.cargando').should('be.visible'); // Verifica que el indicador de carga sea visible
cy.wait('@usuariosConRetraso'); // Espera a que la intercepción ocurra
cy.get('.cargando').should('not.exist'); // Asegura que el indicador de carga desaparezca después del retraso
