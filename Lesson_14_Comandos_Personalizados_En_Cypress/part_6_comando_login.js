/**
 * Comando personalizado para iniciar sesión en la aplicación.
 * @param {string} username - El nombre de usuario del usuario
 * @param {string} password - La contraseña del usuario
 */
Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();
});
