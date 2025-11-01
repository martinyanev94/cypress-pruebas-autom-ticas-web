cy.intercept('DELETE', '/api/usuarios/1', {
    statusCode: 204
}).as('eliminarUsuario');

cy.visit('/usuarios');
cy.get('.eliminar-boton').click(); // Simulamos hacer clic en un botón para eliminar
cy.wait('@eliminarUsuario'); // Esperamos la intercepción
