beforeEach(() => {
  cy.intercept('GET', '/api/tareas', { fixture: 'tareas.json' }).as('cargarTareas');
  const saveTask = cy.stub().as('guardarTarea');
  cy.window().then((win) => {
    win.saveTask = saveTask;
  });
});
