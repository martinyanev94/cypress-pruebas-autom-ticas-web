Cypress.Commands.add('createUser', (userData) => {
  cy.request({
    method: 'POST',
    url: 'https://tuapi.com/users',
    body: userData,
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    expect(response.status).to.eq(201);
    return response.body;
  });
});
describe('Registro de usuario', () => {
  it('Debería registrar un nuevo usuario y llevarlo a la página de perfil', () => {
    const nuevoUsuario = {
      username: 'nuevoUsuario',
      password: 'contraseñaSegura',
    };

    cy.createUser(nuevoUsuario).then((usuario) => {
      cy.visit('/login');
      cy.login(usuario.username, usuario.password);
      cy.url().should('include', '/user-profile');
    });
  });
});
