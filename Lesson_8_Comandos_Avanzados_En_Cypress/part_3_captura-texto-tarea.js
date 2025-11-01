describe('Capturando texto de un elemento', () => {
    it('Debería mostrar el texto después de hacer clic', () => {
        cy.visit('/lista-de-tareas');
        cy.get('.tarea').first().click().then(($tarea) => {
            const tareaTexto = $tarea.text();
            cy.log(`Texto de la primera tarea: ${tareaTexto}`);
        });
    });
});
