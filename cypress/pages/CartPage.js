class CartPage {
  getCartItemName() {
    return cy.get('.inventory_item_name');
  }

  proceedToCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

module.exports = new CartPage();