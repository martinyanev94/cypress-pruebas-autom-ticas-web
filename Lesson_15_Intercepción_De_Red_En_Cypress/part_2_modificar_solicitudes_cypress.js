describe('Modificar solicitudes en Cypress', () => {
    it('Debería enviar datos modificados a la API', () => {
        let requestBody = { name: 'Producto de Prueba', price: 100 };
        
        cy.intercept('POST', '/api/productos', (req) => {
            req.body = {
                ...requestBody,
                price: 150 // modificamos el precio
            };
        }).as('crearProducto');

        cy.visit('/crear-producto');
        cy.get('input[name="nombre"]').type(requestBody.name);
        cy.get('input[name="precio"]').type(requestBody.price);
        cy.get('button[type="submit"]').click();

        cy.wait('@crearProducto').then((interception) => {
            expect(interception.response.statusCode).to.eq(200);
            expect(interception.request.body).to.have.property('price', 150); // verificar el precio modificado
        });
    });
});
