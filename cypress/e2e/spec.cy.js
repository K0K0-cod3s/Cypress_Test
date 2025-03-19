describe("My First E2E Test", () => {
  it("Should visit the homepage and check for text", () => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login"); // Adjust for your app
    cy.contains("Home").should("be.visible");
  });
});
