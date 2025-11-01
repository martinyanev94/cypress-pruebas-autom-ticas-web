cy.intercept('GET', '/api/users', {
  statusCode: 404,
  body: { message: 'Users not found' },
}).as('getUsersError');

cy.visit('/users');
cy.wait('@getUsersError').then((interception) => {
  assert.equal(interception.response.statusCode, 404);
  cy.get('.error-message').should('contain', 'Users not found');
});
