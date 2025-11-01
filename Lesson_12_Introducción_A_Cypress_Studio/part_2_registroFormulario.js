cy.get('input[name="nombre"]').type('Juan Pérez');
cy.get('input[name="email"]').type('juan.perez@example.com');
cy.get('form').submit();
