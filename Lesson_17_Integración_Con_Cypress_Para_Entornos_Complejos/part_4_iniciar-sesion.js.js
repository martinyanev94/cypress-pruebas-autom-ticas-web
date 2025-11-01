cy.get('#login').type('usuario');
cy.get('#password').type('contraseña');
cy.get('form').submit();

cy.url().should('include', '/dashboard');
cy.get('.welcome-message').should('contain', 'Bienvenido');
