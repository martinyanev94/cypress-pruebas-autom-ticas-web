describe('Intercepción de recursos', () => {
    it('Debería verificar la carga de un recurso estático', () => {
        cy.intercept('GET', '/imagen.png', {
            statusCode: 200,
            body: 'Tipo de contenido: imagen/png'
        }).as('obtenerImagen');

        cy.visit('/pagina-con-imagen');

        cy.wait('@obtenerImagen');
        cy.get('img').should('be.visible'); // verificar que la imagen se muestra
    });
});
