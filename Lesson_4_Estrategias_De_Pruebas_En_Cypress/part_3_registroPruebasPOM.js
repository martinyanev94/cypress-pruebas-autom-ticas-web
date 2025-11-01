// pageObjects/RegisterPage.js
class RegisterPage {
    visit() {
        cy.visit('/register');
    }

    fillForm(username, email, password) {
        cy.get('input[name="username"]').type(username);
        cy.get('input[name="email"]').type(email);
        cy.get('input[name="password"]').type(password);
    }

    submit() {
        cy.get('form').submit();
    }
}

export default new RegisterPage();
import RegisterPage from '../pageObjects/RegisterPage';

describe('Pruebas utilizando el Page Object Model', () => {
    it('debería permitir a un usuario registrarse con POM', () => {
        RegisterPage.visit();
        RegisterPage.fillForm('testuser', 'testuser@example.com', 'mypassword');
        RegisterPage.submit();

        cy.url().should('include', '/welcome');
        cy.contains('Bienvenido, testuser!');
    });
});
