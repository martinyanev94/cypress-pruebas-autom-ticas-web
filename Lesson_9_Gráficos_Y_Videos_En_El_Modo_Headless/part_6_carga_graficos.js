describe('Carga de gráficos', () => {
    it('Debería mostrar un gráfico después de cargar los datos', () => {
        cy.visit('/pagina-con-grafico');
        cy.intercept('GET', '/api/grafico').as('loadChart');
        cy.wait('@loadChart').then(interception => {
            cy.log('Datos del gráfico cargados:', interception.response.body);
        });
        cy.get('.grafico').should('be.visible');
    });
});
