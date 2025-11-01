Cypress.Commands.add('login', (username, password) => {
  cy.log(`Iniciando sesión con el usuario: ${username}`);
  cy.get('input[name="username"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
});
describe('Comandos personalizados', () => {
  it('Crear usuario funciona correctamente', () => {
    const nuevoUsuario = {
      username: 'testUser',
      password: 'testPassword',
    };

    cy.createUser(nuevoUsuario).then((usuario) => {
      expect(usuario.username).to.eq(nuevoUsuario.username);
      expect(usuario).to.have.property('id');
    });
  });
});
