//Arquivo PO

var adminLogin = browser.params.adminLogin;

class LoginPage{
    constructor(){
        this.usernameField = element(by.id('usuario'));
        this.passwordnameField = element(by.id('senha'));
        this.buttonLogin = element(by.buttonText('Entrar'));
        this.logo = $('.logo');
        this.passedLogin = $$('#dropdownMenu1').first();
        //this.passedLogin = $('.d-inline-block .align-top');
        this.failedLogin = $('.ui-messages-detail'); 
        this.user = adminLogin.user;
        this.password = adminLogin.password;    
        this.incorrectUser = adminLogin.userI;     
        this.incorrectPassword = adminLogin.passwordI;
    }

    validarLogoInicial(){
        return this.logo.getWebElement();
    }

    loginPassed(){
        //this.usernameField.sendKeys('PIRAMIDE360');
        //this.paswordnameField.sendKeys('piramide');
        this.usernameField.sendKeys(this.user);
        this.passwordnameField.sendKeys(this.password);
        this.buttonLogin.click();
    }

    loginFailed(){
        //this.usernameField.sendKeys('loginIncorreto');
        //this.passwordnameField.sendKeys('senhaIncorreta');
        this.usernameField.sendKeys(this.incorrectUser);
        this.passwordnameField.sendKeys(this.incorrectPassword);        
        this.buttonLogin.click();
    }

    validarloginPassed(){
        return this.passedLogin.getWebElement();
    }

    validarloginFailed(){
        return this.failedLogin.getWebElement();
    }

}

module.exports = LoginPage;