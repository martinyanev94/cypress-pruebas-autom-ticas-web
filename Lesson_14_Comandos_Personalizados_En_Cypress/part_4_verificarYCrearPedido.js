Cypress.Commands.add('checkAndCreateOrder', (product, quantity) => {
    cy.get('.order-list').children().should('have.length', 0).then(() => {
        cy.createOrder(product, quantity);
    });
});
