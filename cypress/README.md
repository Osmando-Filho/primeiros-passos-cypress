## 🍊 OrangeHRM E2E Automation (Primeiros Passos com Cypress)

Este repositório serve como um **hub central** para o projeto de automação de testes End-to-End (E2E) da aplicação **OrangeHRM** (versão Demo). O objetivo principal é aplicar e documentar os conceitos do framework Cypress, seguindo o padrão de design **Page Object Model (POM)**.

### 🎯 Foco dos Testes

* **Login:** Testes de sucesso e falha no acesso ao sistema.
* **Atualização de Informações Pessoais:** Teste do fluxo de atualização de dados na seção "My Info", utilizando dados dinâmicos.

---

## 🛠️ Tecnologias e Arquitetura

Este projeto foi construído sobre uma arquitetura Page Object Model para garantir organização e manutenibilidade.

### 💻 Tecnologias Utilizadas

* **Cypress:** Framework de testes End-to-End (E2E) em JavaScript.
* **Node.js:** Ambiente de execução.
* **Faker.js (@faker-js/faker):** Biblioteca essencial para a geração de dados randômicos (nomes, sobrenomes, IDs, etc.), garantindo que os testes utilizem valores únicos.

### 📐 Arquitetura

O projeto utiliza o **Page Object Model (POM)**:
* As classes em `cypress/pages` (e.g., `loginPage.js`, `myInfoPage.js`) encapsulam os seletores e métodos de interação de cada página.
* Os arquivos `.spec.cy.js` apenas orquestram o fluxo de teste, chamando os métodos das Page Objects.

---

## 📦 Estrutura do Repositório

| Caminho | Tipo | Descrição |
| :--- | :--- | :--- |
| `cypress/e2e` | Pasta | Contém os arquivos de cenário (`login.spec.cy.js` e `user.spec.cy.js`). |
| `cypress/pages` | Pasta | **Classes Page Object Model** (POM) para as diferentes telas da aplicação. |
| `cypress/fixtures/userData.json` | Arquivo | Dados estáticos (usuário/senha) utilizados no login. |
| `cypress.config.js` | Arquivo | Configurações do Cypress (onde a `baseUrl` é definida, assumindo **`https://opensource-demo.orangehrmlive.com/`**). |

---

## ⚙️ Instalação e Execução

Para rodar os testes, siga os passos abaixo:

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** instalados.

### 2. Clonar o Repositório

```bash
git clone <URL do seu repositório>
cd primeiros-passos-cypress
```
### 3. Instalar Dependências
Instale todas as dependências do projeto (incluindo Cypress e Faker.js):
```bash
npm install
```
### 4. Executar os Testes
Você pode executar os testes de duas maneiras:

### A) Modo Interativo (Interface Gráfica)
Inicie o Test Runner do Cypress para explorar os testes interativamente:

```Bash
npx cypress open
```
### B) Modo Headless (Terminal)
Execute todos os testes em modo silencioso (sem interface gráfica) diretamente no terminal:

```Bash
npx cypress run
```
### 🧪 Visão Geral dos Testes

Os cenários estão divididos em dois arquivos de teste:

**login.spec.cy.js**
Testa o acesso à aplicação utilizando dados do userData.json.

| Teste |                     Descrição |
| :--- | :--- |
| Login Sucess | Login com credenciais válidas e verifica a navegação para o Dashboard. |
| Login Fail | Login com credenciais inválidas e verifica a mensagem de erro.|

**user.spec.cy.js**
Testa o fluxo de atualização de dados pessoais.

| Teste |                     Descrição |
| :--- | :--- |
| User Info Update - Sucess | "Fluxo completo de login, navegação para 'My Info', preenchimento de campos com dados randômicos (Faker.js) e validação da mensagem de "Successfully Updated"".|

💡 Contribuições
Sinta-se à vontade para adicionar novos exemplos e refatorar os testes existentes, mantendo o padrão Page Object Model!
