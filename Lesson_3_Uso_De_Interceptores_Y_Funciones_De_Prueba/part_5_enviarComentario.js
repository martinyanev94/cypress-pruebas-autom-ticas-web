const enviarComentario = (entradaId, comentario) => {
    cy.intercept('POST', `/api/comentarios`, {
        statusCode: 201,
        body: { mensaje: 'Comentario enviado', id: 123 }
    }).as('nuevoComentario');

    cy.visit(`/entrada/${entradaId}`);
    cy.get('textarea[name="comentario"]').type(comentario);
    cy.get('button[type="submit"]').click();
    cy.wait('@nuevoComentario');
    cy.get('.mensaje-exito').should('contain', 'Comentario enviado');
};

enviarComentario(1, 'Este es un comentario de prueba.');
