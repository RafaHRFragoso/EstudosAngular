/*describe('Teste Realizar Login Correto P360', function() {
    it('Verificar Logo P360', function() {
        browser.get('http://localhost:4200/');
        browser.driver.manage().window().maximize();
        var logo = $('.logo');
        expect(logo.isDisplayed()).toBeTruthy();
    });

    it('Preencher Campo Login', function() {  
        element(by.id('usuario')).sendKeys('PIRAMIDE360');
        //element(by.model('usuarioFiltro.NOM_USUARIO_LOGIN')).sendKeys('PIRAMIDE360');
    });

    it('Preencher Campo Senha', function() {  
        element(by.id('senha')).sendKeys('piramide');
    });
    
    it('Clicar no Botão de Login', function() {
        var buttonLogin = element(by.buttonText('Entrar'))
        buttonLogin.click();
    });

    it('Varificar Login Realizado', function() {
        var topLogin = $$('#dropdownMenu1').first();
        expect(topLogin.isDisplayed()).toBeTruthy();
    });
});*/

const LoginPage = require ('../../pages/login.po.js');

describe('Teste Realizar Login Correto P360', function() {
    const loginPage = new LoginPage();
    //it('Verificar Logo P360', function() {
    //    expect(loginPage.validarLogoInicial().isDisplayed()).toBeTruthy();     
        //expect(loginPage.logo.isDisplayed()).toBeTruthy();     
    //});

    it('Preencher Campos Login, Senha e Clicar em Entrar', function() {
        browser.get('/');
        loginPage.loginPassed();
    });

    it('Validar Login Realizdo com Sucesso', function() {
        expect(loginPage.validarloginPassed().isDisplayed()).toBeTruthy();
    });
});    