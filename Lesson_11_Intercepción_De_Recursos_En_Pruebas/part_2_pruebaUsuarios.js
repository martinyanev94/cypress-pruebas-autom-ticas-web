cy.visit('/usuarios'); // Navega a la página de usuarios
cy.wait('@obtenerUsuarios'); // Espera a que la intercepción ocurra

cy.get('.usuario') // Selecciona los elementos que contienen los usuarios
  .should('have.length', 2) // Verifica que hay dos usuarios
  .first() // Selecciona el primer usuario
  .should('contain.text', 'Juan Pérez'); // Verifica que el primer usuario sea Juan Pérez
