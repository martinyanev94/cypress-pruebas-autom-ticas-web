beforeEach(() => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('user@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('button[type="submit"]').click();
});
