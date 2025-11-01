describe('Prueba del formulario de registro con interceptores', () => {
    it('debería mostrar un mensaje de éxito al registrarse', () => {
        cy.intercept('POST', '/api/register', {
            statusCode: 200,
            body: { message: 'Registro exitoso' }
        }).as('registerUser');

        cy.visit('/register');
        cy.get('input[name="username"]').type('testuser');
        cy.get('input[name="email"]').type('testuser@example.com');
        cy.get('input[name="password"]').type('mypassword');
        cy.get('form').submit();

        cy.wait('@registerUser').its('response.statusCode').should('eq', 200);
        cy.contains('Registro exitoso').should('be.visible');
    });
});
