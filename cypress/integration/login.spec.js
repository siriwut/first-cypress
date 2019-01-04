describe("Login", () => {
  it("should login success", () => {
    cy.visit("/")
      .get("[data-id=header-login-btn]")
      .click();

    cy.get("[data-id=login-popup-email-input]")
      .last()
      .type("nutcha_rca@gmail.com");

    cy.get("[data-id=login-popup-password-input]")
      .last()
      .type("root1234");

    cy.get("[data-id=login-popup-login-btn]")
      .last()
      .click();

    cy.wait(5000);
  });
});
