cy.get('input[name="nombre"]').type('Admin Usuario');
cy.get('input[name="email"]').type('admin@ejemplo.com');
cy.get('button[type="submit"]').click();
cy.get('.mensaje-exito').should('contain', 'Registro exitoso');
