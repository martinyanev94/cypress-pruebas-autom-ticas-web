beforeEach(() => {
    cy.exec('npm run reset-db');  // comando ficticio para reiniciar tu base de datos
    cy.visit('https://ejemplo.com');
});
