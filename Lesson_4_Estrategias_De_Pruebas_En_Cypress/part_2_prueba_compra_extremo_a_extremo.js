describe('Pruebas de extremo a extremo para el proceso de compra', () => {
    it('debería permitir al usuario comprar un producto', () => {
        cy.visit('/');

        cy.get('.product').first().click();
        cy.get('.add-to-cart').click();
        cy.get('.cart-icon').click();
        cy.get('.checkout-button').click();
        
        cy.get('input[name="shipping_address"]').type('1234 Test St');
        cy.get('input[name="payment_method"]').select('Credit Card');
        cy.get('.place-order').click();
        
        cy.contains('Gracias por su compra!');
    });
});
