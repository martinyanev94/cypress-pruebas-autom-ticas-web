cy.intercept('GET', '/api/datos', {
    statusCode: 500,
    body: { error: 'Error de servidor' }
}).as('errorServer');

cy.visit('/pagina');
cy.wait('@errorServer');
cy.get('.mensaje-error').should('be.visible');
