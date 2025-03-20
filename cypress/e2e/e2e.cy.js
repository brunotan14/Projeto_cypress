/// <reference types="cypress" />

describe('Teste da área de cadastro', () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com/")
    })
    it('Teste E2E - simulando uma compra', () => {
      cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
      cy.get('[data-qa="login-email"]').type("bobzom14@gmail.com")
      cy.get('[data-qa="login-password"]').type("123456")
      cy.get('[data-qa="login-button"]').click()
    
      cy.get('.shop-menu > .nav > :nth-child(1) > a').contains('Home').click()
      cy.get('#slider-carousel > .carousel-inner > .active > :nth-child(1)').should('be.visible')
    
      cy.get('.shop-menu > .nav > :nth-child(2) > a').contains('Products').click()
      cy.get('#sale_image').should('be.visible')
      cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').contains('Add to cart').click()
      cy.get('.modal-content').contains('Your product has been added to cart.')
      cy.get('.modal-footer > .btn').click()

      cy.get(':nth-child(26) > .product-image-wrapper > .single-products > .productinfo > .btn').contains('Add to cart').click()
      cy.get('.modal-content').contains('Your product has been added to cart.')
      cy.get('.modal-footer > .btn').click()

      cy.get('.shop-menu > .nav > :nth-child(3)').contains('Cart').click()
      cy.get('#product-30 > .cart_delete > .cart_quantity_delete').click()
      cy.get('.col-sm-6 > .btn').contains('Checkout').click()




    })
})
