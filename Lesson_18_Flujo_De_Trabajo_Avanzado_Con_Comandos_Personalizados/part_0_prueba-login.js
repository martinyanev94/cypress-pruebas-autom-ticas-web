Cypress.Commands.add('login', (username, password) => {
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
describe('Pruebas de inicio de sesión', () => {
  it('Iniciar sesión con cuenta de usuario válida', () => {
    cy.visit('/login');
    cy.login('usuarioEjemplo', 'contraseñaSegura');
    cy.url().should('include', '/dashboard');
  });
});
