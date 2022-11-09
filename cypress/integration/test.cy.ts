describe("Test with backend", () => {
  beforeEach("login to application", () => {
    cy.loginToApplication();
  });

  it('Should login', () => {
    cy.log('Logged in!')
  })

});
