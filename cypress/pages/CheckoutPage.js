class CheckoutPage {
  fillShippingInfo(firstName, lastName, postalCode) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(postalCode);
    cy.get('[data-test="continue"]').click();
  }

  finishOrder() {
    cy.get('[data-test="finish"]').click();
  }

  getConfirmationHeader() {
    return cy.get('.complete-header');
  }
}

module.exports = new CheckoutPage();