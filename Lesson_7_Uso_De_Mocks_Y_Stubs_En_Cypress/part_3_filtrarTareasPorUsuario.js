describe('Filtrar tareas por usuario', () => {
    beforeEach(() => {
        cy.intercept('GET', '/api/tareas?usuario=123', (req) => {
            req.reply({
                statusCode: 200,
                body: [
                    { id: 1, title: 'Comprar leche', completed: false, userId: 123 },
                ],
            });
        }).as('getTareasPorUsuario');
    });

    it('Debería mostrar tareas para un usuario específico', () => {
        cy.visit('/lista-de-tareas?usuario=123');
        cy.wait('@getTareasPorUsuario');
        cy.get('.tarea').should('have.length', 1);
        cy.get('.tarea').first().should('contain', 'Comprar leche');
    });
});
