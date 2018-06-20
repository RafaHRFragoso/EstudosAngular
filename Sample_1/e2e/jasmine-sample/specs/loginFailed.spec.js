/*describe('Teste Realizar Login Incorreto P360', function() {
    it('Verificar Logo P360', function() {
        browser.get('http://localhost:4200/');
        var logo = $('.logo');
        expect(logo.isDisplayed()).toBeTruthy();
    });

    it('Preencher Campo Login', function() {  
        element(by.id('usuario')).sendKeys('PIRAMIDE360');
        //element(by.model('usuarioFiltro.NOM_USUARIO_LOGIN')).sendKeys('PIRAMIDE360');
    });

    it('Preencher Campo Senha', function() {  
        element(by.id('senha')).sendKeys('senhaIncorreta');
    });
    
    it('Clicar no Botão de Login', function() {
        var buttonLogin = element(by.buttonText('Entrar'))
        buttonLogin.click();
    });

    it('Verificar Login Incorreto', function() {
        var failedLogin = $('.ui-messages-detail');
        expect(failedLogin.isDisplayed()).toBeTruthy();
    });
});
*/

const LoginPage = require ('../../pages/login.po.js');

describe('Teste Realizar Login Incorreto P360', function() {
    const loginPage = new LoginPage();
    it('Preencher Campos Login, Senha Incorretos e Clicar em Entrar', function() {
        browser.get('/');
        loginPage.loginFailed();        
    });

    it('Validar Login Incorreto', function() {
        expect(loginPage.validarloginFailed().isDisplayed()).toBeTruthy();
    });       
});
    