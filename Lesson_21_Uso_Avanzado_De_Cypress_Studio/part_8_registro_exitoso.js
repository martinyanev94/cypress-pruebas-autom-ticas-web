cy.get('input[name="nombre"]').type('Juan Pérez');
cy.pause(); // Pausa la prueba aquí para verificar el estado actual
cy.get('button[type="submit"]').click();
cy.get('.mensaje-exito').should('contain', 'Registro exitoso');
