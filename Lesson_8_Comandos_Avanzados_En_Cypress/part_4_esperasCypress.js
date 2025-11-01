describe('Esperas en Cypress', () => {
    it('Debería esperar a que la tarea se añada antes de verificar', () => {
        cy.visit('/lista-de-tareas');
        cy.get('input[name="nuevaTarea"]').type('Hacer ejercicio');
        cy.get('button[type="submit"]').click();
        cy.wait(2000); // Esperamos 2 segundos para asegurarnos de que la tarea se guarde
        cy.get('.tarea').should('contain', 'Hacer ejercicio');
    });
});
