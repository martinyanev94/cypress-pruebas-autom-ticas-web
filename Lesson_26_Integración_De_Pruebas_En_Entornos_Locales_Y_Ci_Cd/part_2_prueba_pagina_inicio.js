describe('Prueba de la página de inicio', () => {
    it('debería mostrar el título correcto', () => {
        cy.visit('http://localhost:3000'); // Asegúrate de que tu servidor esté ejecutándose
        cy.title().should('include', 'Bienvenido');
    });
});
