describe('Medir tiempo de solicitud', () => {
    it('Debería registrar el tiempo de respuesta de la API', () => {
        cy.intercept('GET', '/api/productos').as('obtenerProductos');

        cy.visit('/tienda');
        cy.wait('@obtenerProductos').then((interception) => {
            const { duration } = interception.response;
            cy.log(`La solicitud tardó ${duration} ms`); // loguear el tiempo de respuesta
            expect(duration).to.be.lessThan(2000); // verificar que tardó menos de 2 segundos
        });
    });
});
