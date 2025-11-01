import { compareSnapshots } from 'cypress-visual-regression';

describe('Prueba de Interfaz Visual', () => {
    it('debería coincidir con el diseño esperado', () => {
        cy.visit('https://ejemplo.com/pagina-especifica');
        cy.wait(1000); // esperar a que cargue completamente
        cy.get('#pantallaCompleta').screenshot();
        compareSnapshots();
    });
});
