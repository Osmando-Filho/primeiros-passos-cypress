import usarData from '../fixtures/userData.json'

describe('Orange HRM - Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashbordGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']"
  }



  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(usarData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(usarData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashbordGrid)
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(usarData.userFail.username)
    cy.get(selectorsList.passwordField).type(usarData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})