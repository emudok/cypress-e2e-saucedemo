class InventoryPage {
  getTitle() {
    return cy.get('.title');
  }

  addProductToCart(productName) {
    // Ex: 'sauce-labs-backpack'
    cy.get(`[data-test="add-to-cart-${productName}"]`).click();
  }

  goToCart() {
    cy.get('.shopping_cart_link').click();
  }
}

module.exports = new InventoryPage();