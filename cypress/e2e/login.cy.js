const LoginPage = require('../pages/LoginPage');
const InventoryPage = require('../pages/InventoryPage');

describe('Autenticação - SauceDemo', () => {
  it('Deve realizar login com sucesso utilizando usuário padrão', () => {
    LoginPage.login('standard_user', 'secret_sauce');

    cy.url().should('include', '/inventory.html');
    InventoryPage.getTitle().should('have.text', 'Products');
  });

  it('Deve exibir mensagem de erro ao tentar logar com usuário bloqueado', () => {
    LoginPage.login('locked_out_user', 'secret_sauce');

    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out.');
  });

  it('Deve exibir mensagem de erro ao informar senha inválida', () => {
    LoginPage.login('standard_user', 'senha_errada');

    LoginPage.getErrorMessage()
      .should('be.visible')
      .and('contain.text', 'Username and password do not match any user in this service');
  });
});