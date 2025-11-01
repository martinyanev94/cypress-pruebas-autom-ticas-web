describe('Prueba de título de página', () => {
    it('Debería tener el título correcto', () => {
        cy.visit('https://www.cypress.io');

        // Verificar el título
        cy.title().should('include', 'Cypress');
    });
});
