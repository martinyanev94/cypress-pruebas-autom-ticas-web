Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
describe('Pruebas de usuario', () => {
    it('Debería iniciar sesión correctamente', () => {
        cy.visit('https://tusitio.com/login');
        cy.login('usuarioPrueba', 'contraseñaSegura');
        cy.url().should('include', '/dashboard');
    });
});
