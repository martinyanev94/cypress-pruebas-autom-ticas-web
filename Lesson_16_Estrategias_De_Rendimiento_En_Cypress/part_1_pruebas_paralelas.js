// cypress/integration/parallel_test_spec.js
describe('Conjunto de Pruebas a Ejecutarse en Paralelo', () => {
    it('Test 1', () => {
        cy.visit('https://ejemplo.com');
        cy.get('#elemento1').click();
        cy.url().should('include', '/resultado1');
    });

    it('Test 2', () => {
        cy.visit('https://ejemplo.com');
        cy.get('#elemento2').click();
        cy.url().should('include', '/resultado2');
    });
});
