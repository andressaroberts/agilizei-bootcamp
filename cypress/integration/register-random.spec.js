/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

context('Register', () =>{
    it('Register an user in the website', () => {
        //ROUTES => mapeadas antes do click que vai desencadeá-las (aqui, o submit)
        //POST 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //POST 200 /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        //GET 200 /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
        cy.server(); //obrigatório pra lidar com rotas

        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**')
        .as('postNewTable');

        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**')
        .as('postUserTable');

        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**')
        .as('getNewTable')

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

        //attach-file
        cy.get('input#imagesrc').attachFile('image-register.PNG')
        
        //click
        cy.get('button#submitbtn').click();

        cy.wait('@postNewTable').then((resNewTable)=> {
            console.log(resNewTable.status)
            cy.log(resNewTable.status)
        })
        

    })
})


//input[ng-model^=Nome] => comece com
//check => radio e checkbox
//select#Skills => selects são bons para Id
//cy.pause();
//((resNewTable)) => variavel do tipo XHR, me devolve os dados da resposta
