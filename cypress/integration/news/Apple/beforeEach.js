beforeEach(() => {
    cy.log(
        "This will run before every scenario of Apple.feature test, but NEVER for Apple feature files"
    );
});
