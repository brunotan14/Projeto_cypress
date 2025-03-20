/// <reference types="cypress" />

describe('Teste da área de cadastro - treinamento', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })
    it('Teste 1 - Realizando cadastro', () => {
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type("Bob")
        cy.get('[data-qa="signup-email"]').type("bobzom14@gmail.com")
        cy.get('[data-qa="signup-button"]').click()
        cy.get('#id_gender1').click()
        cy.get('[data-qa="password"]').type("123456")
        cy.get('[data-qa="days"]').select('14'); cy.get('[data-qa="months"]').select("March"); cy.get('[data-qa="years"]').select("1990")
        cy.get('[data-qa="first_name"]').type("Bob")
        cy.get('[data-qa="last_name"]').type("Zom")
        cy.get('[data-qa="company"]').type("Unipe")
        cy.get('[data-qa="address"]').type("Rua sao jose da costa")
        cy.get('[data-qa="address2"]').type("Centro de serra")
        cy.get('[data-qa="country"]').select("United States")
        cy.get('[data-qa="state"]').type("Zom")
        cy.get('[data-qa="city"]').type("Zom")
        cy.get('[data-qa="zipcode"]').type("Zom")
        cy.get('[data-qa="mobile_number"]').type("123456")
        cy.get('[data-qa="create-account"]').click()
        cy.get('[data-qa="account-created"]').should('be.visible')
        cy.get('[data-qa="continue-button"]').click()
     })
})