Cypress.Commands.add('iniciarSesion', (correo, contraseña) => {
    cy.get('input[name="email"]').type(correo);
    cy.get('input[name="password"]').type(contraseña);
    cy.get('button[type="submit"]').click();
});
cy.iniciarSesion('usuario@ejemplo.com', 'contraseñaSegura');
