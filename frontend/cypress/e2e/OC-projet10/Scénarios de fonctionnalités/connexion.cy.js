describe('connexion', () => {

    const id = "test2@test.fr"
    const pwd = "testtest"

    beforeEach(() => {
        cy.visit('http://localhost:8080/')

    })
    it("Connexion", async () => {
     
        await cy.get('[data-cy="nav-link-login"]').click();
        await cy.get('[data-cy="login-input-username"]').type(id);
        await cy.get('[data-cy="login-input-password"]').type(pwd);
        await cy.get('[data-cy="login-submit"]').click();
        cy.wait(1000);
        cy.get('[data-cy="nav-link-cart"]').should('exist');
    })
})