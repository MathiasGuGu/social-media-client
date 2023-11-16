describe("Test Auth", () => {
  it("Checks for successfull sign out", () => {
    cy.visit("https://mathiasgugu.github.io/social-media-client/");
    cy.wait(2000);
    cy.get("#registerForm > div.modal-footer > button.btn.btn-outline-success")
      .click()
      .wait(1000);
    cy.get("#loginEmail").type("matgum51873@stud.noroff.no");
    cy.get("#loginPassword").type("aaiiuues");
    cy.get(".btn-success").contains("Login").click();
    cy.wait(6000);

    cy.get('[data-auth="logout"]').contains("Logout").click();
  });
});
