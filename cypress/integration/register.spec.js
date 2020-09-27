/// <reference types="cypress" />

context('Register', () =>{
    it('Register an user in the website', () => {
        cy.visit('Register.html')

        cy.get('input[placeholder="First Name"]').type('Student');
        cy.get('input[ng-model^=Last]').type('Agilizei');
        cy.get('input[ng-model^=Email]').type('student@mail.com');
        cy.get('input[ng-model^=Phone]').type('1234567890');
        cy.get('input[value=FeMale]').check();
        cy.get('input[type=Checkbox]').check('Hockey');
        cy.get('input[type=Checkbox]').check('Cricket');
        
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('New Zealand', {force: true});
        cy.get('select#yearbox').select('1998');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('24');
        cy.get('input#firstpassword').type('Friday@1')
        cy.get('input#secondpassword').type('Friday@1')

    })
})


//input[ng-model^=Nome] => comece com
//check => radio e checkbox
//select#Skills => selects são bons para Id

