cy.intercept('GET', '/api/tareas', { statusCode: 500 }).as('errorCargarTareas');
cy.visit('/tareas');
cy.wait('@errorCargarTareas');

cy.get('.error').should('contain', 'Error al cargar tareas');
