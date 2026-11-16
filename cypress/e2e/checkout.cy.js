const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

describe('Fluxo de Compra E2E - SauceDemo', () => {
  beforeEach(() => {
    LoginPage.login('standard_user', 'secret_sauce');
  });

  it('Deve adicionar um produto ao carrinho e finalizar a compra com sucesso', () => {
    // 1. Adiciona a mochila ao carrinho
    InventoryPage.addProductToCart('sauce-labs-backpack');
    InventoryPage.goToCart();

    // 2. Valida o item no carrinho e avança para o checkout
    CartPage.getCartItemName().should('have.text', 'Sauce Labs Backpack');
    CartPage.proceedToCheckout();

    // 3. Preenche dados de entrega e finaliza
    CheckoutPage.fillShippingInfo('Eduarda', 'QA', '84000-000');
    CheckoutPage.finishOrder();

    // 4. Valida confirmação do pedido
    CheckoutPage.getConfirmationHeader()
      .should('be.visible')
      .and('have.text', 'Thank you for your order!');
  });
});