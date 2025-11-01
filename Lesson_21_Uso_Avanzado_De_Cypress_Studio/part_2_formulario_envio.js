cy.get('input[name="nombre"]').type('Juan Pérez');
cy.get('input[name="email"]').type('juan.perez@ejemplo.com');
cy.get('button[type="submit"]').click();
