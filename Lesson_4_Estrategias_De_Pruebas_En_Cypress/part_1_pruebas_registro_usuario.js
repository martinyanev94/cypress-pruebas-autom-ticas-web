describe('Pruebas de integración para el registro de usuario', () => {
    it('debería permitir a un usuario registrarse y ser redirigido a la página de bienvenida', () => {
        cy.visit('/register');
        
        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="email"]').type('testuser@example.com');
        cy.get('input[name="password"]').type('mypassword');
        
        cy.get('form').submit();
        
        cy.url().should('include', '/welcome');
        cy.contains('Bienvenido, testuser!');
    });
});
