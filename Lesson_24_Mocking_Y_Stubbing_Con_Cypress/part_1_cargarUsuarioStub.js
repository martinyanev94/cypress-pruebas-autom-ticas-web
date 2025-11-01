it('debería cargar el usuario correctamente utilizando un stub', () => {
    cy.intercept('GET', '/api/usuario', {
        statusCode: 200,
        body: { id: 1, nombre: 'Juan Pérez' }
    }).as('cargarUsuario');

    cy.visit('/perfil');
    cy.wait('@cargarUsuario');
    
    cy.get('.nombre-usuario').should('contain', 'Juan Pérez');
});
