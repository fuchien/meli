Cypress.on('uncaught:exception', (err, runnable) => false);
describe('MELI Home page', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should show header', () => {
        cy.get('.header')
            .should('be.visible')
            .and('have.css', 'background-color')
            .and('eq', 'rgb(255, 230, 0)');
    });

    it('should show header mercado livre img', () => {
        cy.get('.header .header__img').should('be.visible');
    });

    it('should show header type input and search icon', () => {
        cy.get('.header .header__input')
            .should('be.visible')
            .get('.header .header__search')
            .should('be.visible');
    });

    it('should focuses header input on load home page', () => {
        cy.focused().should('have.class', 'header__input');
    });

    it('should accepts type in header input', () => {
        const typedText = 'Apple ipod';
        cy.get('.header .header__input')
            .type(typedText)
            .should('have.value', typedText);
    });

    it('should change to items router when submit header input', () => {
        const typedText = 'Apple ipod';
        cy.get('.header .header__input')
            .type(typedText)
            .should('have.value', typedText)
            .type('{enter}')
            .location()
            .should(loc => {
                const urlParams = new URLSearchParams(loc.search);
                const search = urlParams.get('search');
                expect(loc.pathname).to.eq(`/items/`);
                expect(search).to.eq('Apple ipod');
            });
    });
});
