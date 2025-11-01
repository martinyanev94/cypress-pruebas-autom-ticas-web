Cypress.Commands.add('createOrder', (product, quantity) => {
    cy.get('input[name="product"]').type(product);
    cy.get('input[name="quantity"]').type(quantity);
    cy.get('button[type="submit"]').click();

    // Verificación de la creación de la orden
    cy.get('.success-message').should('be.visible').and('contain', 'Orden creada exitosamente');
});
describe('Gestión de Órdenes', () => {
    it('Debería crear una nueva orden', () => {
        cy.visit('https://tusitio.com/orders');
        cy.createOrder('Producto de prueba', 2);
        // Continuar con otras validaciones, si es necesario
    });
});
