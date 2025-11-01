describe('Manejo de errores en la lista de tareas', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/tareas', {
            statusCode: 500,
            body: { error: 'Error interno del servidor' },
        }).as('getTareasError');
    });

    it('Debería manejar errores de servidor', () => {
        cy.visit('/lista-de-tareas');
        cy.wait('@getTareasError');
        cy.get('.error').should('contain', 'Error interno del servidor');
    });
});
