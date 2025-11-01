describe('Proceso de Login', () => {
    it('debería permitir iniciar sesión con credenciales válidas', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="email"]').type('usuario@ejemplo.com');
        cy.get('input[name="password"]').type('contraseñaSegura');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/inicio');
        cy.get('.welcome-message').should('contain', 'Bienvenido de nuevo');
    });

    it('debería mostrar un error con credenciales inválidas', () => {
        cy.visit('http://localhost:3000/login');
        cy.get('input[name="email"]').type('invalido@ejemplo.com');
        cy.get('input[name="password"]').type('incorrecta');
        cy.get('button[type="submit"]').click();

        cy.get('.error-message').should('contain', 'Credenciales no válidas');
    });
});
