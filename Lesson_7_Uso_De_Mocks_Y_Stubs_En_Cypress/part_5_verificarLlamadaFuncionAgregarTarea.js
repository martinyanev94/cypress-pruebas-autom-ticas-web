describe('Verificar llamada a la función', () => {
    it('Debería llamar a la función al agregar una tarea', () => {
        const agregarTarea = cy.stub();
        cy.window().then((win) => {
            win.agregarTarea = agregarTarea;
        });

        cy.visit('/lista-de-tareas');
        cy.get('input[name="nuevaTarea"]').type('Hacer ejercicio');
        cy.get('button[type="submit"]').click();

        expect(agregarTarea).to.be.called;
    });
});
