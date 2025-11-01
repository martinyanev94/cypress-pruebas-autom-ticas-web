cy.intercept('GET', '/api/tareas', { fixture: 'tareas.json' }).as('cargarTareas');
cy.visit('/tareas');
cy.wait('@cargarTareas');
