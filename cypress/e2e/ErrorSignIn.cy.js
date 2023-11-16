describe("Authentication Tests", () => {
  it("Tests for login wrong input error", () => {
    cy.visit("https://mathiasgugu.github.io/social-media-client/");
    cy.wait(2000);
    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success")
      .click()
      .wait(1000);
    cy.get("#loginEmail").type("wrongmatgum51873@stud.noroff.no");
    cy.get("#loginPassword").type("wrongaaiiuues");
    cy.get(".btn-success").contains("Login").click();
  });
});
