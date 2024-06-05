describe('POST automatization test', () => {

    const username = "test2@test.fr";
    const password = "testtest";
    const avaibleProduct = 5;
    const unavaibleProduct = 3;
    const quantity = 1;

    beforeEach(() => {
       
        cy.login(username, password);
    });
    it("Login", () => {
        cy.get('@connection').should((response) => {
            expect(response.status).to.eq(200)
        })
    })
    
    it("Ajouter un produit disponible au panier", () => {
        const authorization = `Bearer ${Cypress.env('token')}`
        const product = avaibleProduct;
        cy.request(
            {
                headers: { authorization },
                method: 'PUT',// on attend un POST normalement
                url: 'http://localhost:8081/orders/add',
                body: { product, quantity }
            }
        ).should((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it("Ajouter un produit en rupture de stock au panier", () => {
        const authorization = `Bearer ${Cypress.env('token')}`
        const product = unavaibleProduct
        cy.request(
            {
                headers: { authorization },
                method: 'PUT',// on attend un POST normalement
                url: 'http://localhost:8081/orders/add',
                body: { product, quantity }
            }
        ).should((response) => {
            expect(response.status).to.eq(200)// on attend une 400 et pas une 200 normalement
        })
    })
    it("Ajouter un avis", () => {
        const authorization = `Bearer ${Cypress.env('token')}`
        const title = "string";
        const comment = "string";
        const rating = 3;

        cy.request(
            {
                headers: { authorization },
                method: 'POST',
                url: 'http://localhost:8081/reviews',
                body: { title, comment, rating }
            }
        ).should((response) => {
            expect(response.status).to.eq(200)
        })
    })
})
