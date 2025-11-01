describe('Gestión de cuenta en el Panel de Usuario', () => {
    it('Acceso a la sección de gestión de cuenta', () => {
        cy.visit('https://tusitio.com/login');
        cy.get('input[name="username"]').type('usuarioPrueba');
        cy.get('input[name="password"]').type('contraseñaSegura');
        cy.get('button[type="submit"]').click();

        cy.get('a[href="/account"]').click();
        cy.url().should('include', '/account');
        cy.get('h1').should('contain', 'Gestión de Cuenta');
    });
});
