/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Register', () =>{
    it('Register an user in the website', () => {
        cy.visit('Register.html')

        cy.get('input[placeholder="First Name"]').type(chance.first());
        cy.get('input[ng-model^=Last]').type(chance.last());
        cy.get('input[ng-model^=Email]').type(chance.email());
        cy.get('input[ng-model^=Phone]').type(chance.phone({ formatted: false}));
        cy.get('input[value=FeMale]').check();
        cy.get('input[type=Checkbox]').check('Hockey');
        cy.get('input[type=Checkbox]').check('Cricket');
        
        cy.get('select#Skills').select('Javascript');
        cy.get('select#countries').select('Argentina');
        cy.get('select#country').select('New Zealand', {force: true}); //elemento presente
        cy.get('select#yearbox').select('1998');
        cy.get('select[ng-model^=month]').select('February');
        cy.get('select#daybox').select('24');
        cy.get('input#firstpassword').type('Friday@1')
        cy.get('input#secondpassword').type('Friday@1')

        cy.get('input#imagesrc').attachFile('image-register.PNG')
        cy.get('button#submitbtn').click();
        //cy.pause();

    })
})


//input[ng-model^=Nome] => comece com
//check => radio e checkbox
//select#Skills => selects são bons para Id

