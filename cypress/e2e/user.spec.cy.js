import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'  
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM - Tests', () => {

  const selectorsList = {
    
    firstNameField: "[name='firstName']",
    middleNameField: "[name='middleName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: ".--close",
    genericComboBox: ".oxd-select-text--arrow",
    secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
    thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
    submitSaveButton: "[type='submit']",
    Nacionality: ".oxd-select-text--active",
  }


  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    menuPage.accessPerformance()
    
    
    // cy.get(selectorsList.myInfoButton).click()S
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTeste')
    // cy.get(selectorsList.middleNameField).clear().type('MiddleNameTeste')
    // cy.get(selectorsList.lastNameField).clear().type('LastNameTeste')
    // cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeID')
    // cy.get(selectorsList.genericField).eq(4).clear().type('OtherIDTeste')
    // cy.get(selectorsList.genericField).eq(5).clear().type('Drivers Licence Teste')
    // cy.get(selectorsList.genericField).eq(6).clear().type('18-10-2025')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.submitSaveButton).eq(0).click({force: true})
    //cy.get('body').should('contain', 'Successfully Updated')
   // cy.get('.oxd-toast-close')

    // cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    // cy.get(selectorsList.secondItemComboBox).click({force: true})
    // cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    // cy.get(selectorsList.thirdItemComboBox).click({force: true})
    // cy.get(selectorsList.genericField).eq(7).clear().type('20-03-1980')
    // cy.get(selectorsList.dateCloseButton).click()
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(usarData.userFail.username)
    cy.get(selectorsList.passwordField).type(usarData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})