describe('Prueba de Stub', () => {
    it('Debería devolver datos de usuario simulados', () => {
        const userDataStub = cy.stub();
        userDataStub.returns({
            id: 1,
            name: 'Juan Pérez',
            email: 'juan.perez@ejemplo.com'
        });

        // Simulamos una llamada a la API
        cy.visit('/perfil');
        cy.window().then((win) => {
            win.getUserData = userDataStub;
        });

        // Accedemos al elemento en la página
        cy.get('.usuario').should('contain', 'Juan Pérez');
    });
});
