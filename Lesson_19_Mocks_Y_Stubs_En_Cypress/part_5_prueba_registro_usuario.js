describe('Prueba del Formulario de Registro', () => {
    it('Debería registrar al usuario y mostrar un mensaje de éxito', () => {
        cy.intercept('POST', '/api/registrar', {
            statusCode: 201,
            body: {
                message: 'Usuario registrado con éxito'
            }
        }).as('registrarUsuario');

        cy.visit('/registro');

        // Llenamos el formulario
        cy.get('input[name="nombre"]').type('Juan Pérez');
        cy.get('input[name="email"]').type('juan.perez@ejemplo.com');
        cy.get('form').submit();

        cy.wait('@registrarUsuario'); // Esperamos el Mock de la API

        // Verificamos que el mensaje se muestra en la UI
        cy.get('.mensaje-exito').should('contain', 'Usuario registrado con éxito');
    });
});
