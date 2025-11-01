Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://tu-aplicación-web.com/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
describe('Pruebas de Login', () => {
    it('Prueba de inicio de sesión exitoso', () => {
        cy.login('usuarioEjemplo', 'contraseñaEjemplo');
        cy.url().should('include', '/dashboard');
        cy.contains('Bienvenido, usuarioEjemplo').should('be.visible');
    });
});
