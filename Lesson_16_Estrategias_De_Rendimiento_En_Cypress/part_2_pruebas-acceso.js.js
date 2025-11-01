// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://ejemplo.com/login');
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('form').submit();
});
describe('Pruebas de Recursos Protegidos', () => {
    beforeEach(() => {
        cy.login('miUsuario', 'miContraseña');
    });

    it('Verifica que el usuario tiene acceso', () => {
        cy.visit('https://ejemplo.com/dashboard');
        cy.get('#dashboard').should('be.visible');
    });
});
