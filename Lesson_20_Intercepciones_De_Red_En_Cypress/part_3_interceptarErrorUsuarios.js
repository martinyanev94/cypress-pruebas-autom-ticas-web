cy.intercept('GET', '/api/usuarios', {
    statusCode: 404,
    body: { message: 'No se encontraron usuarios' }
}).as('getUsuariosError');

cy.visit('/usuarios'); 
cy.wait('@getUsuariosError'); 

cy.get('.error-message').should('contain', 'No se encontraron usuarios'); // Verificamos que se muestra el mensaje de error
