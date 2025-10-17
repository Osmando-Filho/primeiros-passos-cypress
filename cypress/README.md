# 🚀 Primeiros Passos com Cypress

Este repositório serve como um **hub central** para todos os projetos e exemplos de testes de automação desenvolvidos com o framework **Cypress**. O objetivo é documentar e praticar os conceitos fundamentais do Cypress em diferentes aplicações web.

## 📦 Estrutura do Repositório

O repositório está organizado para que cada diretório represente um projeto ou conjunto específico de testes.

/ ├── cypress/ │ └── e2e/ │ └── <Seu arquivo de teste, ex: orangehrm.cy.js> ├── node_modules/ ├── package.json ├── cypress.config.js └── README.md


## 🛠️ Tecnologias Utilizadas

* **Cypress:** Framework de testes End-to-End (E2E) em JavaScript.
* **Node.js:** Ambiente de execução necessário para instalar as dependências.

## ⚙️ Instalação e Execução

Para começar a rodar os testes neste repositório, siga os passos abaixo:

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** (versão 14 ou superior) instalado em sua máquina.

### 2. Clonar o Repositório

git clone <URL do seu repositório>
cd primeiros-passos-cypress

### 3. Instalar Dependências
Instale o Cypress e as demais dependências do projeto:
npm install

### 4. Executar os Testes
Você pode executar os testes de duas maneiras:

### A) Modo Interativo (Interface Gráfica)
Inicie o Test Runner do Cypress para explorar os testes interativamente:

(Bash)
npx cypress open

### B) Modo Headless (Terminal)
Execute todos os testes em modo silencioso (sem interface gráfica) diretamente no terminal:

(Bash)
npx cypress run

####🧪 Exemplo de Teste: Orange HRM ####
O arquivo de teste inicial demonstra fluxos básicos de login, tanto de sucesso quanto de falha, utilizando a aplicação de demonstração Orange HRM.

Código Exemplo (Ações Principais)
describe('Orange HRM - Tests', () => {
  it('Login - Sucess', () => {
    // Acessa a página de login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    // Preenche o campo de usuário e senha
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')

    // Clica no botão de login
    cy.get("[type='submit']").click()

    // Verifica se a navegação foi para o dashboard
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(".oxd-topbar-header-breadcrumb-module").contains('Dashboard')
  })
  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    // Tenta fazer login com credenciais inválidas
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test')
    cy.get("[type='submit']").click()

    // Verifica a presença da mensagem de alerta (erro)
    cy.get("[role='alert']")
  })
})

***🎯 O que este teste demonstra: ***

Uso do comando cy.visit() para navegação.

Uso do comando cy.get() com seletores de atributo ([name='...'] e [type='...']) para localizar elementos.

Uso do comando cy.type() para inserção de dados.

Uso de assertions (.should('eq', '...') e .contains()) para verificar o estado da aplicação.

***💡 Contribuições ***

Sinta-se à vontade para adicionar novos exemplos e refatorar os testes existentes para demonstrar outras funcionalidades do Cypress!