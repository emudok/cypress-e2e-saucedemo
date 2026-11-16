cat << 'EOF' > README.md
# Automação de Testes E2E - SauceDemo (Cypress)

![Cypress E2E Tests](https://github.com/emudok/cypress-e2e-saucedemo/actions/workflows/cypress.yml/badge.svg)

Suíte de testes automatizados End-to-End (E2E) desenvolvida com **Cypress** e **JavaScript**, aplicando o padrão de arquitetura **Page Object Model (POM)** para validar os fluxos de autenticação e compra na plataforma [SauceDemo](https://www.saucedemo.com/).

## Tecnologias e Arquitetura

* **[Cypress](https://www.cypress.io/):** Framework para automação de testes de interface web.
* **Page Object Model (POM):** Separação entre o mapeamento de elementos/ações de cada página (`cypress/pages/`) e as regras de validação (`cypress/e2e/`), facilitando a manutenção e o reuso de código.
* **[GitHub Actions](https://github.com/features/actions):** Pipeline de Integração Contínua (CI) configurado para executar os testes automaticamente a cada `push` ou `pull request`.

## Estrutura do Projeto

```text
cypress-e2e-saucedemo/
├── .github/
│   └── workflows/
│       └── cypress.yml             # Pipeline CI do GitHub Actions
├── cypress/
│   ├── e2e/
│   │   ├── checkout.cy.js          # Fluxo completo de compra E2E
│   │   └── login.cy.js             # Testes positivos e negativos de login
│   ├── pages/
│   │   ├── CartPage.js             # Mapeamento e ações da tela do carrinho
│   │   ├── CheckoutPage.js         # Mapeamento e ações do checkout
│   │   ├── InventoryPage.js        # Mapeamento e ações do catálogo de produtos
│   │   └── LoginPage.js            # Mapeamento e ações da tela de login
│   └── support/
│       └── e2e.js
├── .gitignore
├── cypress.config.js               # Configuração de baseUrl e viewport
├── package.json
└── README.md

## Cenários Executados

| Suíte | Cenário | Resultado Esperado |
| :--- | :--- | :--- |
| **Login** | Autenticação com credenciais válidas (`standard_user`) | Redirecionamento para a vitrine de produtos (`/inventory.html`) |
| **Login** | Tentativa de login com usuário bloqueado (`locked_out_user`) | Exibição de alerta de usuário bloqueado |
| **Login** | Tentativa de login com senha inválida | Exibição de mensagem de credenciais inválidas |
| **Checkout** | Jornada completa: login, adição de item ao carrinho, preenchimento de entrega e finalização | Exibição da confirmação `Thank you for your order!` |

## Como Executar Localmente

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/emudok/cypress-e2e-saucedemo.git](https://github.com/emudok/cypress-e2e-saucedemo.git)
   cd cypress-e2e-saucedemo
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute os testes em modo headless (terminal):**
   ```bash
   npx cypress run
   ```

4. **Ou abra a interface interativa do Cypress:**
   ```bash
   npx cypress open
   ```