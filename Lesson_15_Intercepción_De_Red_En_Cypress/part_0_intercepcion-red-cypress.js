describe('Intercepción de Red en Cypress', () => {
    it('Debería manejar una lista de productos vacía', () => {
        cy.intercept('GET', '/api/productos', []).as('obtenerProductos');
        cy.visit('/tienda');
        cy.wait('@obtenerProductos');

        cy.get('.mensaje-vacio').should('contain', 'No hay productos disponibles');
    });
});
