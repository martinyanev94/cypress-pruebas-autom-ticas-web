const registrarUsuario = (nombre, email) => {
    cy.visit('/registro');
    cy.get('input[name="nombre"]').type(nombre);
    cy.get('input[name="email"]').type(email);
    cy.get('button[type="submit"]').click();
};

registrarUsuario('Juan', 'juan@example.com');
cy.get('.mensaje-exito').should('be.visible');

registrarUsuario('Maria', 'maria@example.com');
cy.get('.mensaje-exito').should('be.visible');
