const saveTask = cy.stub().as('guardarTarea');
cy.window().then((win) => {
  win.saveTask = saveTask;
});

cy.get('input[name="nuevaTarea"]').type('Nueva tarea');
cy.get('button[type="submit"]').click();

cy.get('@guardarTarea').should('have.been.calledOnce');
