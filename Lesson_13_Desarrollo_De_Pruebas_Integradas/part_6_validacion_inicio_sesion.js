describe('Validación de inicio de sesión', () => {
    it('Muestra un error si las credenciales son incorrectas', () => {
        cy.visit('https://tusitio.com/login');
        cy.get('input[name="username"]').type('usuarioInvalido');
        cy.get('input[name="password"]').type('contraseñaIncorrecta');
        cy.get('button[type="submit"]').click();

        cy.get('.error-message').should('be.visible')
            .and('contain', 'Credenciales incorrectas');
    });
});
