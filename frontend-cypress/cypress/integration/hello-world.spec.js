/// <reference types="cypress" />

//Test suite
describe('test suite example', function(){

it('Test - Invalid login', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester')
    cy.get(':nth-child(2) > input').type('db7xuf8c')
    cy.get('.btn').click()
    cy.contains('Bad username or password')
    }
    )
it('Test - valid login', function(){
    cy.visit('http://localhost:3000/login')
    cy.get(':nth-child(1) > input').type('tester01')
    cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
    cy.get('.btn').click()
    cy.contains('Tester Hotel Overview')
}

)
})
