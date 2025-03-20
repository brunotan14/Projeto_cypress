/// <reference types="cypress" />
describe('Teste da área de cadastro - treinamento', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })
    const telas = [
        {device: 'iPhone 11', width: 414, height: 896},
        {device: 'Samsung Galaxy S20', width: 360, height: 740},
        {device: 'iPad', width: 1024, height: 1366},
        {device: 'Desktop', width: 1920, height: 1080}
    ]

    telas.forEach(tela => {
        it(`Teste ${tela.device}`, () => {
            cy.viewport(tela.width, tela.height)
            cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
            cy.get('[data-qa="signup-name"]').type("Bob")
        
        })
    })
})