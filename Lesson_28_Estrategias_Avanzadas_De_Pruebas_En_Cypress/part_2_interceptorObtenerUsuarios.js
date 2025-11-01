cy.intercept('GET', '/api/users', {
  statusCode: 200,
  body: [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ],
}).as('getUsers');

cy.visit('/users');
cy.wait('@getUsers').then((interception) => {
  assert.equal(interception.response.statusCode, 200);
  assert.equal(interception.response.body.length, 2);
});
