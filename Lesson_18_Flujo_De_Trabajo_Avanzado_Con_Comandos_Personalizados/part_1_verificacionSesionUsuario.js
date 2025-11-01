Cypress.Commands.add('checkUserLoggedIn', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.welcome-message').length > 0) {
      cy.log('Usuario está autenticado');
    } else {
      cy.log('Usuario no está autenticado. Redirigiendo a la página de inicio de sesión...');
      cy.visit('/login');
    }
  });
});
describe('Acceso a la página de usuario', () => {
  it('Debería redirigir a inicio de sesión si el usuario no está autenticado', () => {
    cy.visit('/user-profile');
    cy.checkUserLoggedIn();
    cy.url().should('include', '/login');
  });
});
