describe("vérifiez la présence des boutons d\'ajout au panier quand vous êtes connecté", () => {

    const id = "test2@test.fr"
    const pwd = "testtest"

    beforeEach(() => {
        cy.visit('http://localhost:8080/#/login');
    })

    it("Bouton ajout au Panier ", () => {
        cy.get('[data-cy="nav-link-login"]').click()
        cy.get('[data-cy="login-input-username"]').type(id);
        cy.get('[data-cy="login-input-password"]').type(pwd);
        cy.get('[data-cy="login-submit"]').click();
        cy.get('[data-cy="nav-link-products"]').click();
        cy.get('[ng-reflect-router-link="/products,3"]').should('exist');
        cy.get('[ng-reflect-router-link="/products,3"]').click();
        cy.get('[data-cy="detail-product-add"]').should('exist');
    })

})

