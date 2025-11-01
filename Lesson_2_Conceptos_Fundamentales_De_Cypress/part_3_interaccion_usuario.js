cy.get('.usuario').as('usuarioElemento');
cy.get('@usuarioElemento').click();
cy.get('@usuarioElemento').should('have.class', 'activo');
