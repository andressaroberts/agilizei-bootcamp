/// <reference types="cypress" />

context('List', () =>{
    it('List without registers', () =>{
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-empty'
        }).as('getNewTable');

        cy.get('div[role=row]').should('have.length', 1);

        cy.visit('WebTable.html')
    });

    it.only('List with a single register', () =>{
        cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get'
        })

        cy.visit('WebTable.html')

        cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
        cy.get('@gridCellPhone').should('contain.text','1234567890' )
    });


})

// 1-> .first()
// 2
// 3
// 4 -> .eq
// 5 -> .last()