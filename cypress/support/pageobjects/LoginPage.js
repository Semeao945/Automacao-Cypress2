/// reference types="Cypress" />

import LoginElements from'../elements/LoginElements'
const loginElements = new LoginElements 
const url = Cypress.config("baseUrl")

class LoginPage {
    // acessa o site que sera testado
    acessarSite() {
        cy.visit(url)
        cy.wait(1000)
        
    }
  // preencher campos 
  preenchercampoUser() {
    cy.get(loginElements.PreencherUser()).type('01452505713')
    cy.wait(1000)
    cy.get(loginElements.clicarAvancar()).click()
    cy.wait(1000)
  }
  // validar campo
  Validarcampousuario() {
    cy.get(loginElements.validarCampoUser()).contains('Número do CPF')
  }
  // validar botoes de senha
  preencherSenhadigital() {
    cy.get(loginElements.senhaDigital()).should('contain', '6')
    cy.get(loginElements.senhaDigital()).should('contain', '0')
    cy.get(loginElements.senhaDigital()).should('contain', '6')
    cy.get(loginElements.senhaDigital()).should('contain', '0')
    cy.get(loginElements.senhaDigital()).should('contain', '6')
    cy.get(loginElements.senhaDigital()).should('contain', '0')
    // clicar nos botoes dinamicos de senha
    cy.wait(1000)
    cy.get(loginElements.senhaDigital()).contains('6').click()
    cy.get(loginElements.senhaDigital()).contains('0').click()
    cy.get(loginElements.senhaDigital()).contains('6').click()
    cy.get(loginElements.senhaDigital()).contains('0').click()
    cy.get(loginElements.senhaDigital()).contains('6').click()
    cy.get(loginElements.senhaDigital()).contains('0').click()
    cy.get(loginElements.clicarAvancar()).click()
    cy.wait(20000)
  }
  // validar textos na pagina
  Validartexto(){
    cy.get(loginElements.validarTextoEntendi()).contains('Ops! Dispositivo não reconhecido.')
    cy.get(loginElements.clicarAvancar()).click()
    cy.wait(8000)
    cy.get(loginElements.clicarAvancar()).click()
    cy.wait(10000)
    cy.get(loginElements.clicarAvancar()).click()
    cy.wait(20000)


  }
}

export default LoginPage;