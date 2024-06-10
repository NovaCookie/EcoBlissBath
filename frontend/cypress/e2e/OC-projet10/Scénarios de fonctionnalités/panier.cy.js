describe('Teste de la fonctionnalité du panier', () => {

    const username = "test2@test.fr";
    const password = "testtest";
    const pageProduit = '[ng-reflect-router-link="/products,5"]';
    const pageAllProduits = '[data-cy="nav-link-products"]';
    const btnAddCart = '[data-cy="detail-product-add"]';
    const textStock = '[data-cy="detail-product-stock"]';
    const urlOrders = 'http://localhost:8081/orders';
    const urlProducts = 'http://localhost:8081/products';
    const logOut = '[data-cy="nav-link-logout"]';
    const quantity = '[data-cy="detail-product-quantity"]';

    beforeEach(() => {
        cy.loginSite(username, password);
    })
    it("Vérification ajout au panier et supression dans le stock", () => {
        cy.intercept('GET', urlOrders).as('asOrder');
        cy.intercept('GET', urlProducts).as('asProducts');
        cy.get(pageAllProduits).click();
        cy.wait('@asProducts');
        cy.get(pageProduit).click();
        cy.wait(600);
        cy.get(textStock).invoke('text')
            .then((text) => {
                var stock = text.split(' ')[0];
                console.log("prem", stock);
                if (stock > 0) {
                    cy.get(btnAddCart).click();
                    cy.wait('@asOrder');
                    cy.get(pageAllProduits).click();
                    cy.wait('@asProducts');
                    cy.get(pageProduit).click();
                    cy.wait(1000);
                    cy.get(textStock).invoke('text')
                        .then((text2) => {
                            var stock2 = text2.split(' ')[0];
                            expect(parseInt(stock2)).eq(stock - 1);
                        })
                } else {
                    cy.log("la valeur doit être supérieur à 0").end()
                };
            })
        cy.get('[data-cy="nav-link-cart"]').click();
        cy.get('[data-cy="cart-line-delete"]').click();
        cy.get(logOut).click();

    })

    it('Entrer négatif', () => {
        cy.intercept('GET', urlProducts).as('asProducts');
        cy.get(pageAllProduits).click();
        cy.wait('@asProducts');
        cy.get(pageProduit).click();
        cy.get(quantity)
            .should('exist')
            .clear()
            .type(-1)
        cy.wait(500);
        cy.get(quantity)
            .invoke('val')
            .then(((val) => expect(parseInt(val)).eq(-1)));
        cy.wait(500);
        cy.get(btnAddCart).click();
        cy.wait(1000);
        cy.get(btnAddCart).should('exist');
        cy.get('.cart-section').should('not.exist');
        cy.get(logOut).click()
    });

    it('Entrer supérieur à 20', () => {
        cy.intercept('GET', urlOrders).as('asOrder');
        cy.intercept('GET', urlProducts).as('asProducts');
        cy.get(pageAllProduits).click();
        cy.wait('@asProducts');
        cy.get(pageProduit).click();
        cy.get(quantity)
            .should('exist')
            .clear()
            .type(21);
        cy.wait(500);
        cy.get(quantity)
            .invoke('val')
            .then(((val) => expect(parseInt(val)).eq(21)));
        cy.wait(500);
        cy.get(btnAddCart).click();
        cy.wait('@asOrder');
        cy.wait(200);
        // cy.get('.cart-section').should('not.exist');
        cy.get(logOut).click()
    })

    it("Vérification ajout au panier avec API", () => {
        cy.intercept('GET', urlOrders).as('asOrder');
        cy.intercept('GET', urlProducts).as('asProducts');
        cy.get(pageAllProduits).click();
        cy.wait('@asProducts');
        cy.get(pageProduit).click();
        cy.get(quantity)
            .should('exist')
            .clear()
            .type(10);
        cy.get(btnAddCart).click();
        cy.wait('@asOrder')
            .then((status) => expect(status.response.statusCode).eq(200))
        cy.get('[data-cy="nav-link-cart"]').click()
        cy.get('[data-cy="cart-line-delete"]').click()
        cy.get(logOut).click()
    })
})


