cy.wait(3000); // no es lo ideal
cy.get('#miElemento').should('be.visible');
