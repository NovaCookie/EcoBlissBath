describe('vérifiez la présence des champs et le bouton de connexion', () => {

    beforeEach(() => {
        cy.visit('http://localhost:8080/#/')
        cy.get('[data-cy="nav-link-login"]').click()

    })
    it("Check fields and connection button", () => {
        cy.get('[data-cy="login-input-username"]').should('exist');
        cy.get('[data-cy="login-input-password"]').should('exist');
        cy.get('[data-cy="login-submit"]').should('exist');
    })

})