describe('Intercepción múltiple de solicitudes', () => {
    it('Debería manejar solicitudes simultáneas', () => {
        cy.intercept('GET', '/api/productos', { fixture: 'productos.json' }).as('obtenerProductos');
        cy.intercept('GET', '/api/categorias', { fixture: 'categorias.json' }).as('obtenerCategorias');

        cy.visit('/tienda');

        cy.wait(['@obtenerProductos', '@obtenerCategorias']);

        cy.get('.producto').should('have.length', 5); // asumimos que el fixture tiene 5 productos
        cy.get('.categoria').should('have.length', 3); // y 3 categorías
    });
});
