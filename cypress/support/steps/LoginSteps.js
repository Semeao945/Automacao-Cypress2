/*global Given, Then, When */

import LoginPage from'../pageobjects/LoginPage'
const loginPage = new LoginPage

Given("acesse a plataforma Crefisa PJ",() => {    
    loginPage.acessarSite();
})

When("eu localizo o botao acessar com o usuario", () => {
  loginPage.Validarcampousuario();
})

And('Coloco usuario e senha valido', () => {
loginPage.preenchercampoUser();
loginPage.preencherSenhadigital();


})


Then("Clico no botao Avancar", () => {
    loginPage.Validartexto();

})