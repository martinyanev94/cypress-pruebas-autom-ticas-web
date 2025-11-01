Cypress.on('uncaught:exception', (err, runnable) => {
    // Si hay un error que esperas y no quieres que falle la prueba
    if (err.message.includes('Error esperado')) {
        return false; // Ignora el error
    }
});
