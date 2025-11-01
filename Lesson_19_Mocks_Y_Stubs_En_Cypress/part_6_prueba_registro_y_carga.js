describe('Prueba combinada de Registro y Carga', () => {
    it('Debería registrar al usuario y mostrar la lista de usuarios', () => {
        const userStub = cy.stub();
        userStub.returns([
            { id: 1, name: 'Juan Pérez', email: 'juan.perez@ejemplo.com' }
        ]);

        cy.visit('/registro');
        
        // Mock de registro
        cy.intercept('POST', '/api/registrar', {
            statusCode: 201,
            body: {
                message: 'Usuario registrado con éxito'
            }
        }).as('registrarUsuario');
        
        cy.get('input[name="nombre"]').type('Juan Pérez');
        cy.get('input[name="email"]').type('juan.perez@ejemplo.com');
        cy.get('form').submit();
        
        cy.wait('@registrarUsuario');

        // Simulemos cargar los usuarios después del registro
        cy.window().then((win) => {
            win.loadUsers = userStub; // Stub para cargar la lista de usuarios
        });

        cy.get('.mensaje-exito').should('contain', 'Usuario registrado con éxito');
        
        // Simulamos que después del registro se carga la lista de usuarios
        win.loadUsers();

        // Verificamos que el usuario aparece en la lista
        cy.get('.lista-usuarios').should('contain', 'Juan Pérez');
    });
});
