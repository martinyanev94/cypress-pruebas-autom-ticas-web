cy.intercept('POST', '/api/login', {
  statusCode: 200,
  body: { token: 'fake-jwt-token' },
}).as('login');

cy.visit('/login');
cy.get('input[name="username"]').type('testuser');
cy.get('input[name="password"]').type('password123');
cy.get('button[type="submit"]').click();
cy.wait('@login').then((interception) => {
  assert.equal(interception.response.statusCode, 200);
  cy.window().its('localStorage').invoke('getItem', 'token').should('eq', 'fake-jwt-token');
});
