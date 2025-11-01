Cypress.Commands.add('loginAndCheckStatus', (username, password) => {
  cy.login(username, password).then(() => {
    cy.request('GET', 'https://tuapi.com/status')
      .its('status')
      .should('eq', 200);
  });
});
describe('Flujos más complicados', () => {
  it('Iniciar sesión y verificar estado', () => {
    cy.visit('/login');
    cy.loginAndCheckStatus('usuarioEjemplo', 'contraseñaSegura');
  });
});
