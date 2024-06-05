/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
Cypress.Commands.add('login', (username, password) => {
    cy.request('POST', 'http://localhost:8081/login', { username, password }).as('connection')
        .then((resp) => {
            Cypress.env('token', resp.body.token);
        })
});

Cypress.Commands.add('loginSite', (username, password) => {
    cy.intercept('GET', 'http://localhost:8081/products/random').as('pageAccueil')
    cy.visit('http://localhost:8080/#/');
    cy.get('[data-cy="nav-link-login"]').click();
    cy.get('[data-cy="login-input-username"]').type(username);
    cy.get('[data-cy="login-input-password"]').type(password);
    cy.wait(100);
    cy.get('[data-cy="login-submit"]').click();
    cy.wait('@pageAccueil')
    cy.wait(500)
});