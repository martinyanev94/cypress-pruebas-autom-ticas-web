const usuarioResponses = {
    success: { id: 1, nombre: 'Ana Torres' },
    notFound: { statusCode: 404, body: 'Usuario no encontrado' },
    serverError: { statusCode: 500, body: 'Error del servidor' }
};

it('debería manejar diferentes respuestas de la API de usuario', () => {
    cy.intercept('GET', '/api/usuario/1', usuarioResponses.success).as('getUser');
    cy.visit('/perfil');
    cy.wait('@getUser');
    
    cy.get('.nombre-usuario').should('contain', 'Ana Torres');

    cy.intercept('GET', '/api/usuario/2', usuarioResponses.notFound).as('getUserNotFound');
    cy.visit('/perfil-no-existe');
    cy.wait('@getUserNotFound');

    cy.get('.error-message').should('contain', 'Usuario no encontrado');

    cy.intercept('GET', '/api/usuario/3', usuarioResponses.serverError).as('getUserServerError');
    cy.visit('/perfil-error');
    cy.wait('@getUserServerError');

    cy.get('.error-message').should('contain', 'Error del servidor');
});
