/// <reference types="cypress" />
describe('Teste da área de login - treinamento', () => {
  beforeEach(() => {
    cy.visit("https://automationexercise.com/")
  })
    it('Teste 1 - relizando login', () => {
      cy.get('.shop-menu > .nav > :nth-child(4)').click()  // cy.get('.nav').contains('Login').click(): pode ser utilizado como alternativa também
      cy.get('[data-qa="login-email"]').type("bobzom14@gmail.com")
      cy.get('[data-qa="login-password"]').type("123456")
      cy.get('[data-qa="login-button"]').click() // cy.get('[data-qa="login-button"]').contains('Login').click(): pode ser utilizado como alternativa também
    })

   it('Tesste 2 - login com email e senha invalidos', () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click()  // cy.get('.nav').contains('Login').click(): pode ser utilizado como alternativa também
    cy.get('[data-qa="login-email"]').type("bobzom@gmail.com")
    cy.get('[data-qa="login-password"]').type("1234")
    cy.get('[data-qa="login-button"]').click() // cy.get('[data-qa="login-button"]').contains('Login').click(): pode ser utilizado como alternativa também
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
   })

   it('Teste 3 - login com email e/ou senhavazio', () => {
    cy.get('.shop-menu > .nav > :nth-child(4)').click()  
    cy.get('[data-qa="login-password"]').type("123456")
    cy.get('[data-qa="login-button"]').click() 
    cy.get('.login-form > form > p').should('have.text', 'Your email or password is incorrect!')
   })

})