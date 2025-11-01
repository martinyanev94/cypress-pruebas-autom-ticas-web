import 'cypress-axe';

cy.visit('/pagina');
cy.injectAxe();
cy.checkA11y();
