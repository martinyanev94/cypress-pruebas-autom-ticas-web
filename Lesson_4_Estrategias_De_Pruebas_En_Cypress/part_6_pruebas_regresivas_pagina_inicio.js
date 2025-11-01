describe('Pruebas regresivas para la página de inicio', () => {
    it('debe cargar la página correctamente y mostrar todos los elementos', () => {
        cy.visit('/');
        
        cy.get('.hero').should('be.visible');
        cy.get('.main-content').should('exist');
        cy.get('.footer').should('contain', 'Derechos reservados');
    });
});
