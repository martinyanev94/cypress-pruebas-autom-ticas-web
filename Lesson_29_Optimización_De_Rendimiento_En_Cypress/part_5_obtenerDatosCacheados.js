Cypress.Commands.add('getCachedData', () => {
  const cacheKey = 'myData';

  const data = Cypress.env(cacheKey);
  if (data) {
    return cy.wrap(data);
  }

  // De lo contrario, hacemos una llamada y almacenamos el resultado
  return cy.request('/api/data').then((response) => {
    Cypress.env(cacheKey, response.body);
    return cy.wrap(response.body);
  });
});
