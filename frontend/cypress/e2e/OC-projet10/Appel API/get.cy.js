
describe('GET automatization tests', () => {

    const username = "test2@test.fr"
    const password = "testtest"

    it("Requête de la liste des produits du panier sans être connecté", () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:8081/orders',
            failOnStatusCode: false
        }).should((response) => {
            expect(response.status).to.eq(401)
        })
    })

    beforeEach(() => {
        cy.login(username, password);
    });
    
    it("Requête de la liste des produits du panier", () => {
        const authorization = `Bearer ${Cypress.env('token')}`
        cy.request({
            headers: {
                authorization,
            },
            method: 'GET',
            url: 'http://localhost:8081/orders',
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })
    it("Requête d’une fiche produit spécifique", () => {
        const authorization = `Bearer ${Cypress.env('token')}`
        const id = 5;
        cy.request({
            headers: { authorization, },
            method: 'GET',
            url: 'http://localhost:8081/products/' + id,
        }).should((response) => {
            expect(response.status).to.eq(200)
        })
    })

})

