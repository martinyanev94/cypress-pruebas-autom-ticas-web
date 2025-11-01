Cypress.Commands.add('getUserData', (userId) => {
    cy.request(`https://api.tusitio.com/users/${userId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('username');
    });
});
