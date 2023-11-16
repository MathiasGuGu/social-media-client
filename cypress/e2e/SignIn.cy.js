describe("Test Auth", () => {
  it("Test for successfull signin", () => {
    cy.visit("https://mathiasgugu.github.io/social-media-client/");
    cy.wait(2000);
    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success")
      .click()
      .wait(1000);
    cy.get("#loginEmail").type("matgum51874@stud.noroff.no");
    cy.get("#loginPassword").type("aaiiuues");
    cy.get(".btn-success").contains("Login").click();
  });
});
