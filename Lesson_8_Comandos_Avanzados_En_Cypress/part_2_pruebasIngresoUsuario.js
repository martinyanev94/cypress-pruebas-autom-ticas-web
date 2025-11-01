describe('Pruebas de inicio de sesión', () => {
    it('Debería iniciar sesión con credenciales válidas', () => {
        cy.login('usuario@ejemplo.com', 'contraseñaSegura123');
        cy.url().should('include', '/dashboard');
    });

    it('No debería iniciar sesión con credenciales inválidas', () => {
        cy.login('usuario@ejemplo.com', 'contraseñaIncorrecta');
        cy.get('.error-msg').should('be.visible');
    });
});
