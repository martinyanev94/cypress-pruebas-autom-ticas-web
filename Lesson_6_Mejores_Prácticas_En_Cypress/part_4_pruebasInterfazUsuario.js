describe('Pruebas de interfaz de usuario', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('debería mostrar el encabezado correctamente', () => {
        cy.get('header').should('contain', 'Bienvenido');
    });

    it('debería mostrar el pie de página correctamente', () => {
        cy.get('footer').should('contain', 'Derechos reservados');
    });
});
