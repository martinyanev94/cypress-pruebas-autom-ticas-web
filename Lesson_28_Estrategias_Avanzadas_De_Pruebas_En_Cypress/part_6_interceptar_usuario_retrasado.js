cy.intercept('GET', '/api/users', (req) => {
  req.reply((res) => {
    res.delay(2000); // Simulamos un retraso de 2 segundos
    res.send({ id: 1, name: 'Delayed User' });
  });
}).as('slowUserFetch');

cy.visit('/users');
cy.wait('@slowUserFetch').then((interception) => {
  assert.equal(interception.response.body.name, 'Delayed User');
});
