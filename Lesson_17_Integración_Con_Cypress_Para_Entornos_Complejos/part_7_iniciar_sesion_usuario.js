cy.log('Usuario intentando iniciar sesión con', username);
cy.get('#login').type(username);
