describe("My First E2E Test", () => {
  it("Should visit the homepage and check for text", () => {
    cy.visit("http://localhost:3000"); // Adjust for your app
    cy.contains("Welcome").should("be.visible");
  });
});
