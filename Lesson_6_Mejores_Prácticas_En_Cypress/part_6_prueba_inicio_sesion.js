describe('Prueba de inicio de sesión', () => {
    it('debería permitir a un usuario iniciar sesión con credenciales válidas', () => {
        // Verificamos que el usuario pueda acceder a su cuenta con las credenciales correctas
        cy.login('testuser@example.com', 'mypassword');
        cy.url().should('include', '/dashboard');
    });
});
