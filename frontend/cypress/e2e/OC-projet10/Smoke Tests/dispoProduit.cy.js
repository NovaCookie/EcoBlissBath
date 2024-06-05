describe("vérifiez la présence du champ de disponibilité d\'un produit ", () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/#/')
        cy.get('[data-cy="nav-link-products"]').click()
        cy.get('[ng-reflect-router-link="/products,3"]').click()
    })
    it("Avaible Product field ", () => {
        cy.get('[data-cy="detail-product-stock"]').should('exist');
    })
})