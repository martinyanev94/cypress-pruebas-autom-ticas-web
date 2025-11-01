describe('Espiar funciones en Cypress', () => {
    it('Debería llamar a la función de agregar tarea', () => {
        const agregarTarea = cy.spy();
        cy.window().then((win) => {
            win.agregarTarea = agregarTarea; // Reemplazamos la función original
        });

        cy.visit('/lista-de-tareas');
        cy.get('input[name="nuevaTarea"]').type('Leer un libro');
        cy.get('button[type="submit"]').click();

        cy.wrap(agregarTarea).should('have.been.called');
    });
});
