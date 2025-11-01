// fixtures/user.json
{
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "mypassword"
}

// test.js
describe('Prueba de inicio de sesión con fixture', () => {
    it('debería permitir a un usuario iniciar sesión', () => {
        cy.fixture('user').then((user) => {
            cy.visit('/login');
            cy.get('input[name="email"]').type(user.email);
            cy.get('input[name="password"]').type(user.password);
            cy.get('form').submit();
            cy.url().should('include', '/dashboard');
        });
    });
});
