describe('Pruebas de inicio de sesión', () => {
    it('debería iniciar sesión correctamente con credenciales válidas', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="email"]').type('usuario@ejemplo.com');
        cy.get('input[name="password"]').type('contraseña');
        cy.get('button[type="submit"]').click();
        cy.url().should('include', '/inicio');
    });
});
