cy.intercept('GET', '/api/usuarios', { fixture: 'usuarios.json' }).as('getUsuarios');
cy.visit('/libros');
cy.wait('@getUsuarios').its('response.statusCode').should('eq', 200);
