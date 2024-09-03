import { Given, Then, Before } from "cypress-cucumber-preprocessor/steps";

const url = "https://apple.com";

let myBeforeCount = 0;

Before(() => {
    expect(myBeforeCount).to.be.lessThan(2);
    myBeforeCount += 1;
});

Given(`I kinda open Apple page`, () => {
    cy.visit(url);
});

// This is the same step that we have in socialNetworks/Facebook/different.js, but you don't have to worry about collisions!
Then(`Do Basic Assertions in Apple Page`, () => {
    cy.title().should("include", "Apple");
    // Assert that the footer contains "Copyright"
    cy.get('footer').should("contain.text", "Copyright");

    // Assert that there is at least one imdage on the page
    cy.get('img').should('have.length.greaterThan', 0);
    // Assert that the search icon is visible
    cy.get('a.globalnav-link.globalnav-link-search').should("be.visible");


});
