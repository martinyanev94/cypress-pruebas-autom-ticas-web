describe('Prueba del manejo del tiempo en la aplicación', () => {
    it('debería mostrar el saludo correcto según la hora', () => {
        const now = new Date(2023, 1, 1, 10); // 10 AM
        cy.clock(now.getTime());
        
        cy.visit('/');

        cy.get('.greeting').should('contain', 'Buenos días');
        
        const afternoon = new Date(2023, 1, 1, 15); // 3 PM
        cy.clock(afternoon.getTime());
        cy.reload();
        cy.get('.greeting').should('contain', 'Buenas tardes');
        
        const evening = new Date(2023, 1, 1, 20); // 8 PM
        cy.clock(evening.getTime());
        cy.reload();
        cy.get('.greeting').should('contain', 'Buenas noches');
    });
});
