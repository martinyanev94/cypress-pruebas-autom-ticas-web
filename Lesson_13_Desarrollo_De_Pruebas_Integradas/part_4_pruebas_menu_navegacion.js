describe('Pruebas en el Menú de Navegación', () => {
    it('Verifica que el menú de navegación se actualiza después del inicio de sesión', () => {
        cy.visit('https://tusitio.com/login');
        cy.get('input[name="username"]').type('usuarioPrueba');
        cy.get('input[name="password"]').type('contraseñaSegura');
        cy.get('button[type="submit"]').click();

        cy.get('.navbar').should('exist');
        cy.get('.navbar').contains('Perfil').should('be.visible');
        cy.get('.navbar').contains('Cerrar sesión').should('be.visible');
    });
});
