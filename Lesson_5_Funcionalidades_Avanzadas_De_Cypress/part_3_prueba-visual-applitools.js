describe('Prueba visual con Applitools', () => {
    it('debería coincidir con la imagen de referencia', () => {
        cy.visit('/');

        cy.eyesOpen({
            appName: 'Mi Aplicación',
            testName: 'Verificación visual de la página de inicio',
        });

        cy.eyesCheckWindow('Página de inicio');

        cy.eyesClose();
    });
});
