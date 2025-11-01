describe('Prueba de inicio de sesión', () => {
    it('Permite a un usuario iniciar sesión y acceder al panel de usuario', () => {
        cy.visit('https://tusitio.com/login');

        cy.get('input[name="username"]').type('usuarioPrueba');
        cy.get('input[name="password"]').type('contraseñaSegura');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
        cy.get('.welcome-message').should('contain', 'Bienvenido usuarioPrueba');
    });
});
