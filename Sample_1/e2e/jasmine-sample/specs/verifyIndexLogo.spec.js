const LoginPage = require ('../../pages/login.po.js');

describe('Teste Validar Logo Inicial', function() {
    const loginPage = new LoginPage();
    it('Verificar Logo P360', function() {
        browser.get('/');
        expect(loginPage.validarLogoInicial().isDisplayed()).toBeTruthy();     
        //expect(loginPage.logo.isDisplayed()).toBeTruthy();     
    });
});    