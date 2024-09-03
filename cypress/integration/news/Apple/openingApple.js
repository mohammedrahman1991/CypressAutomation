import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://apple.com";

Given(`Go to Apple page`, () => {
    cy.visit(url);
});
