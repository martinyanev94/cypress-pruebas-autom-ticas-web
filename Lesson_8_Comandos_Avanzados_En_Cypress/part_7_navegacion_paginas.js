describe('Navegación entre páginas', () => {
    it('Debería ir a la página anterior', () => {
        cy.visit('/pagina1');
        cy.get('a[href="/pagina2"]').click();
        
        // Ahora estamos en pagina2, e intentamos volver
        cy.go('back');
        cy.url().should('include', '/pagina1');
    });
});
