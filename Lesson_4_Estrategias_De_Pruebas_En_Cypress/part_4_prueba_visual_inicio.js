describe('Prueba visual de la página de inicio', () => {
    it('debería coincidir con la captura de pantalla de referencia', () => {
        cy.visit('/');
        
        cy.eyesOpen({
            appName: 'Mi Aplicación',
            testName: 'Prueba visual del inicio',
        });

        cy.eyesCheckWindow('Página de inicio');

        cy.eyesClose();
    });
});
