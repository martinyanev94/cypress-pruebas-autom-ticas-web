cy.intercept('GET', '/api/usuarios', {
    statusCode: 200,
    body: [
        { id: 1, nombre: 'Usuario 1' },
        { id: 2, nombre: 'Usuario 2' }
    ]
}).as('obtenerUsuarios');

cy.visit('/pagina-usuarios');
cy.wait('@obtenerUsuarios');
cy.get('.usuario').should('have.length', 2);
