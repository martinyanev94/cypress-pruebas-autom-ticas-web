cy.intercept('GET', '/api/users').as('getUsers');
cy.visit('/users');
cy.window().then((win) => {
  cy.spy(win.console, 'log').as('logSpy');
});

// Suponiendo que se llama console.log al cargar los usuarios
cy.wait('@getUsers').then(() => {
  cy.get('@logSpy').should('have.been.called');
});
