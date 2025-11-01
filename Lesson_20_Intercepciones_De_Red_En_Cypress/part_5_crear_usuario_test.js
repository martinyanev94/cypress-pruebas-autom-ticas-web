cy.intercept('POST', '/api/usuarios', (req) => {
    expect(req.body).to.have.property('name', 'Juan Pérez');
    req.reply({ statusCode: 201, body: { id: 3, name: 'Juan Pérez' } });
}).as('crearUsuario');

cy.visit('/usuarios');
cy.get('input[name="nombre"]').type('Juan Pérez');
cy.get('form').submit();
cy.wait('@crearUsuario');
