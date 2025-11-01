// cypress/fixtures/user.json
{
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "mypassword"
}
describe('Prueba de inicio de sesión con fixture', () => {
    it('debería permitir a un usuario iniciar sesión', () => {
        cy.fixture('user').then((user) => {
            cy.login(user.email, user.password);
            cy.url().should('include', '/dashboard');
        });
    });
});
