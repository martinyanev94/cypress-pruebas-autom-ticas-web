describe('Comprobación de mocks', () => {
    let usuarioService;

    beforeEach(() => {
        usuarioService = {
            obtenerUsuario: cy.stub().returns(Promise.resolve({ id: 1, nombre: 'María Gómez' }))
        };
    });

    it('debería llamar a obtenerUsuario y verificar el nombre', () => {
        cy.visit('/perfil', {
            onBeforeLoad: (win) => {
                win.usuarioService = usuarioService;
            }
        });

        cy.get('.cargar-usuario').click();
        cy.get('.nombre-usuario').should('contain', 'María Gómez');
        expect(usuarioService.obtenerUsuario).to.have.been.calledOnce;
    });
});
