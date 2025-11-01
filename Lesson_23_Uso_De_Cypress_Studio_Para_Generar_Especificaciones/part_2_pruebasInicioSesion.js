describe('Pruebas de inicio de sesión', () => {
    it('Debería permitir el inicio de sesión con credenciales válidas', () => {
        cy.visit('https://tuaplicacion.com');
        cy.get('input[name="username"]').type('usuario');
        cy.get('input[name="password"]').type('contraseña');
        cy.get('button[type="submit"]').click();
    });
});
