describe('Verificación de estado de botones', () => {
    it('Debería habilitar el botón solo después de ingresar texto', () => {
        cy.visit('/formulario');
        cy.get('input[name="nombre"]').type('Juan');
        cy.get('button[type="submit"]').should('not.be.disabled');
        
        cy.get('input[name="nombre"]').clear();
        cy.get('button[type="submit"]').should('be.disabled');
    });
});
