describe('Prueba de la lista de tareas', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/tareas', {
            statusCode: 200,
            body: [
                { id: 1, title: 'Comprar leche', completed: false },
                { id: 2, title: 'Limpiar la casa', completed: true }
            ],
        }).as('getTareas');
    });

    it('Debería mostrar la lista de tareas', () => {
        cy.visit('/lista-de-tareas');
        cy.wait('@getTareas');
        cy.get('.tarea').should('have.length', 2);
        cy.get('.tarea').first().should('contain', 'Comprar leche');
    });
});
