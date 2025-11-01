describe('Pruebas de Login', () => {
    it('Prueba de inicio de sesión exitoso', () => {
        cy.visit('https://tu-aplicación-web.com/login');
        cy.get('input[name="username"]').type('usuarioEjemplo');
        cy.get('input[name="password"]').type('contraseñaEjemplo');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/dashboard');
        cy.contains('Bienvenido, usuarioEjemplo').should('be.visible');
    });
});
