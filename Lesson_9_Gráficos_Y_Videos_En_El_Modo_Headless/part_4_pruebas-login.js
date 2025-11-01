describe('Pruebas de Login', () => {
    it('Debería permitir a un usuario iniciar sesión con credenciales válidas', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('usuario@ejemplo.com');
        cy.get('input[name="password"]').type('contraseñaSegura');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
    });
});
