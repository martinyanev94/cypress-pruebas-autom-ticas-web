const registrarUsuarioConIntercepcion = (nombre, email, status, mensajeEsperado) => {
    cy.intercept('POST', '/api/registro', {
        statusCode: status,
        body: mensajeEsperado
    }).as('registroUsuario');

    cy.visit('/registro');
    cy.get('input[name="nombre"]').type(nombre);
    cy.get('input[name="email"]').type(email);
    cy.get('button[type="submit"]').click();
    cy.wait('@registroUsuario');
    cy.get('.mensaje-error').should('contain', mensajeEsperado);
};

// Prueba de registro exitoso
registrarUsuarioConIntercepcion('Carlos', 'carlos@example.com', 201, 'Registro exitoso');

// Prueba de error de validación
registrarUsuarioConIntercepcion('Ana', 'ana@com', 400, 'Email inválido');
