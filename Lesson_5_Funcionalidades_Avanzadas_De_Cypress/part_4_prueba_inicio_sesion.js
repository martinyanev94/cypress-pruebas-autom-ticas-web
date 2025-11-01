describe('Depuración de la prueba de inicio de sesión', () => {
    it('debería permitir a un usuario iniciar sesión', () => {
        cy.visit('/login');
        cy.get('input[name="email"]').type('testuser@example.com');
        cy.get('input[name="password"]').type('mypassword');
        cy.debug(); // Pausa aquí para inspeccionar el estado actual
        cy.get('form').submit();
        
        cy.url().should('include', '/dashboard');
    });
});
