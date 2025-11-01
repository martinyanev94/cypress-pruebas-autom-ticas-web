cy.intercept('GET', '/api/tareas', { fixture: 'tareas.json' }).as('cargarTareas');
const saveTask = cy.stub().as('guardarTarea');
cy.window().then((win) => {
  win.saveTask = saveTask;
});

cy.visit('/tareas');
cy.wait('@cargarTareas');

cy.get('input[name="nuevaTarea"]').type('Agregar otra tarea');
cy.get('button[type="submit"]').click();

cy.get('@guardarTarea').should('have.been.calledOnce');
cy.get('ul.tareas').should('contain', 'Agregar otra tarea');
