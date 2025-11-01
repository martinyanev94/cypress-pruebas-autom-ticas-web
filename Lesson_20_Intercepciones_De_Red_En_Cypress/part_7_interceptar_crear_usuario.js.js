cy.intercept('POST', '/api/usuarios', (req) => {
    req.body.name = req.body.name.trim(); // Limpiamos el nombre para eliminar espacios
    req.reply({ statusCode: 201, body: req.body });
}).as('crearUsuarioLimpiado');

cy.visit('/usuarios');
cy.get('input[name="nombre"]').type(' Juan Pérez '); // Con espacios
cy.get('form').submit();
cy.wait('@crearUsuarioLimpiado');
