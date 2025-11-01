cy.intercept('GET', '/api/usuarios', {
    statusCode: 500,
    body: { error: 'Error interno del servidor' }
}).as('errorServer');

cy.visit('/pagina-usuarios');
cy.wait('@errorServer');
cy.get('.mensaje-error').should('be.visible');
