describe('Prueba de Mock', () => {
    it('Debería realizar una solicitud de API y recibir datos mockeados', () => {
        cy.intercept('GET', '/api/usuarios', {
            statusCode: 200,
            body: [
                { id: 1, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com' }
            ]
        }).as('getUsuarios');

        cy.visit('/usuarios'); // Visitamos la página que hace la solicitud a la API.

        // Esperamos a que la solicitud se complete
        cy.wait('@getUsuarios');

        // Ahora verificamos que el usuario está visible en la lista
        cy.get('.usuario').should('contain', 'Juan Pérez');
    });
});
