import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'  
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myinfopage.js'
import { faker, faker as fakerBR } from '@faker-js/faker'

const profissaoBrasileira = fakerBR.person.jobTitle().substring(0, 10)
const employeeId = fakerBR.number.int(100000)
const otherId = fakerBR.number.int(100000)

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()


describe('Orange HRM - Tests', () => {

    it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    //menuPage.accessPerformance()
    
    myInfoPage.fillPersonalDetails(faker.person.firstName(), faker.person.lastName(), faker.person.lastName(), 'Nick Name')
    myInfoPage.fillEmployeeDetails(profissaoBrasileira, employeeId, otherId,'2027-03-01')
    myInfoPage.fillStatus()
    myInfoPage.saveForm() 

  })

})