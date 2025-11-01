cy.request('https://tu-aplicación-web.com/api').then((response) => {
    expect(response.duration).to.be.lessThan(1000); // Asegúrate de que la solicitud se complete en menos de 1 segundo
});
