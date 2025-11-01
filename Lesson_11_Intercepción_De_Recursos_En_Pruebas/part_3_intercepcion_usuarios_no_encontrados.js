cy.intercept('GET', '/api/usuarios', {
    statusCode: 404,
    body: { error: 'No se encontraron usuarios' }
}).as('usuariosNoEncontrados');
cy.visit('/usuarios'); // Navega a la página de usuarios
cy.wait('@usuariosNoEncontrados'); // Espera a que la intercepción ocurra

cy.get('.mensaje-error') // Selecciona el elemento que muestra el mensaje de error
  .should('contain.text', 'No se encontraron usuarios'); // Verifica que se muestre el mensaje adecuado
