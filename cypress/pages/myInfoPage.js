class MyInfoPage {
    selectorsList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            nicknameField: '[data-top="343.971875"]',
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            genericComboBox: ".oxd-select-text--arrow",
            secondItemComboBox: ".oxd-select-dropdown > :nth-child(2)",
            thirdItemComboBox: ".oxd-select-dropdown > :nth-child(3)",
            submitSaveButton: "[type='submit']",
            Nacionality: ".oxd-select-text--active",
        }
        return selectors
    }
    
    fillPersonalDetails (firstName, middleName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().nicknameField).eq(3).clear().type(nickname)  
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenceNumber, expiryDate) {
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenceNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expiryDate)
        cy.get(this.selectorsList().dateCloseButton).click()
        //cy.get(this.selectorsList().genericField).eq(10).clear().type(SSNNumber)
    }

    saveForm () {
        cy.get(this.selectorsList().submitSaveButton).eq(0).click({force: true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')

    }
    
    fillStatus () {
        cy.get(this.selectorsList().genericComboBox).eq(0).click({force: true})
        cy.get(this.selectorsList().secondItemComboBox).click({force: true})
        cy.get(this.selectorsList().genericComboBox).eq(1).click({force: true})
        cy.get(this.selectorsList().thirdItemComboBox).click({force: true})
        //cy.get(this.selectorsList().genericField).eq(7).clear().type('1980-03-20')
        //cy.get(this.selectorsList().dateCloseButton).click()
    }
}
export default MyInfoPage