describe('Intercepción de errores del servidor', () => {
    it('Debería mostrar un mensaje de error en caso de fallo del servidor', () => {
        cy.intercept('GET', '/api/productos', {
            statusCode: 500,
            body: { error: 'Error interno del servidor' }
        }).as('obtenerProductosConError');

        cy.visit('/tienda');
        cy.wait('@obtenerProductosConError');

        cy.get('.mensaje-error').should('contain', 'Error interno del servidor');
    });
});
