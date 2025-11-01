cy.visit('/usuarios'); // Vamos a la página de usuarios
cy.wait('@getUsuarios'); // Esperamos la intercepción definida anteriormente
cy.get('.usuario').should('have.length', 2); // Verificamos que se muestran dos usuarios
cy.get('.usuario').first().should('contain', 'Juan Pérez'); // Verificamos el primer usuario
