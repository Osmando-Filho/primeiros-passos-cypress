import usarData from '../fixtures/userData.json'

describe('Orange HRM - Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashbordGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    submitSaveButton: "[type='submit']",
  }


  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(usarData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(usarData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashbordGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTeste')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTeste')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTeste')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIDTeste')
    cy.get(selectorsList.genericField).eq(5).clear().type('Drivers Licence Teste')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-18-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitSaveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(usarData.userFail.username)
    cy.get(selectorsList.passwordField).type(usarData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})