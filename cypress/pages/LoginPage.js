class LoginPage {
  visit() {
    cy.visit('/');
  }

  fillUsername(username) {
    cy.get('[data-test="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('[data-test="password"]').type(password);
  }

  submit() {
    cy.get('[data-test="login-button"]').click();
  }

  login(username, password) {
    this.visit();
    if (username) this.fillUsername(username);
    if (password) this.fillPassword(password);
    this.submit();
  }

  getErrorMessage() {
    return cy.get('[data-test="error"]');
  }
}

module.exports = new LoginPage();