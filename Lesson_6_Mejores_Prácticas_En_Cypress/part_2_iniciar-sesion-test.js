// support/commands.js
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/login');
    cy.get('input[name="email"]').type(email);
    cy.get('input[name="password"]').type(password);
    cy.get('form').submit();
});
describe('Prueba de inicio de sesión', () => {
    it('debería permitir a un usuario iniciar sesión', () => {
        cy.login('testuser@example.com', 'mypassword');
        cy.url().should('include', '/dashboard');
    });
});
